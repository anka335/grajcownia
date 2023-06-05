<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Room;
use App\Models\User;
use App\Models\Dictionary;

class SecretController extends Controller
{
    public function setSecret(Request $request)
    {
        $roomId = $request->input('roomId');
        $secret = $request->input('secret');
        $uid = $request->input('uid');
        $room = Room::where('id', $roomId)->first();
        if(!$room)
            return response()->json(['error' => 'Nie istnieje taki pokój'], 400);
        if(!$room->selector_id)
            return response()->json(['error' => 'Wybierz rolę wybierającego'], 400);
        $selector = User::where('id', $room->selector_id)->first();
        if($selector->uid != $uid)
            return response()->json(['error' => 'Nie jesteś wybierającym'], 400);
        $doesWordExist = Dictionary::where('word', $secret)->exists();
        if(!$doesWordExist)
            return response()->json(['error' => 'Podane słowo nie istnieje'], 400);
        
        if($room->status == 'active')
            return response()->json(['error' => 'Gra już trwa, nie możesz zmienić hasła'], 400);
        
        Room::where('id', $roomId)->update(['secret_word' => $secret]);
        if($room->guesser_id)
            Room::where('id', $roomId)->update(['status' => 'active']);
        return response()->json(['data' => 'Ustawiono hasło na: ' . $secret], 200);
    }
}
