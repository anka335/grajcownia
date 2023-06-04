<?php

namespace App\Http\Controllers;

use App\Events\RoleChange;
use Illuminate\Http\Request;
use App\Models\Room;
use App\Models\User;
class RoleChangeController extends Controller
{
    public function role(Request $request)
    {
        $roomId = $request->input('roomId');
        $role = $request->input('role');
        $uid = $request->input('uid');
        \Log::info($roomId . $role . $uid);
        $isRoleAvailable = false;
        if($role == 'selector')
            $isRoleAvailable = Room::where('id', $roomId)->whereNull('selector_id')->exists();
        else if ($role == 'guesser')
            $isRoleAvailable = Room::where('id', $roomId)->whereNull('guesser_id')->exists();
        if(!$isRoleAvailable)
            return response()->json(['error' => 'Rola jest już zajęta w tym pokoju'], 400);
        $user = User::where('uid', $uid)->first();
        if($user)
            $name = $user->name;
        else
            $name = "Anon";
        event(new RoleChange($roomId, $role, $name));
        if($role == 'selector')
            Room::where('id', $roomId)->update(['selector_id' => $user->id]);
        else if ($role == 'guesser')
            Room::where('id', $roomId)->update(['guesser_id' => $user->id]);
        return [];
    }
}
