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
        $isRoleAvailable = false;
        $room = Room::where('id', $roomId)->first();
        if($role == 'selector')
        {
            $isRoleAvailable = Room::where('id', $roomId)->whereNull('selector_id')->exists();
            if(!$isRoleAvailable)
            {
                $user = User::where('id', $room->selector_id)->first();
                $uncheck = ($user->uid == $uid);
                if(!$uncheck)
                    return response()->json(['error' => 'Rola jest już zajęta w tym pokoju'], 400);
                    
                event(new RoleChange($roomId, $role, "", null));
                Room::where('id', $roomId)->update(['selector_id' => null]);
                Room::where('id', $roomId)->update(['status' => 'inactive']);
                Room::where('id', $roomId)->update(['secret_word' => null]);
            }
            else
            {
                $user = User::where('uid', $uid)->first();
                if(!$user)
                    return response()->json(['error' => 'Brak użytkownika o podanym uid w bazie danych'], 400);
                
                if($user->name)
                    $name = $user->name;
                else
                    $name = "Anon";
                
                event(new RoleChange($roomId, $role, $name, $uid));
                Room::where('id', $roomId)->update(['selector_id' => $user->id]);

            }
        }
        else if ($role == 'guesser')
        {
            $isRoleAvailable = Room::where('id', $roomId)->whereNull('guesser_id')->exists();
            if(!$isRoleAvailable)
            {
                $user = User::where('id', $room->guesser_id)->first();
                $uncheck = ($user->uid == $uid);
                if(!$uncheck)
                    return response()->json(['error' => 'Rola jest już zajęta w tym pokoju'], 400);
                event(new RoleChange($roomId, $role, "", null));
                Room::where('id', $roomId)->update(['guesser_id' => null]);
            }
            else
            {
                $user = User::where('uid', $uid)->first();
                if(!$user)
                    return response()->json(['error' => 'Brak użytkownika o podanym uid w bazie danych'], 400);

                if($user->name)
                    $name = $user->name;
                else
                    $name = "Anon";
                event(new RoleChange($roomId, $role, $name, $uid));
                Room::where('id', $roomId)->update(['guesser_id' => $user->id]);
                if($room->selector_id && $room->secret_word)
                {
                    Room::where('id', $roomId)->update(['status' => 'active']);
                    Room::where('id', $roomId)->update(['guesses' => null]);
                    Room::where('id', $roomId)->update(['colors' => null]);
                    event(new guessMade("startowanko", null, $roomId, null));
                }
            }
        }
        return [];
    }
}
