<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Room;
use App\Models\User;
use App\Models\Dictionary;
use App\Events\guessMade;
class guessMadeController extends Controller
{
    public function guess(Request $request)
    {
        $uid = $request->input('uid');
        $word = $request->input('word');
        $roomId = $request->input('roomId');
        $row = $request->input('row');
        \Log::info($uid . " " . $word . " " . $roomId);
        $room = Room::where('id', $roomId)->first();
        if(!$room || !$room->guesser_id)
            return response()->json(['error' => 'Najpierw wybierz rolę zgadującego'], 400);
        $guesser = User::where('id', $room->guesser_id)->first();
        if($guesser->uid != $uid)
            return response()->json(['error' => 'Nie jesteś zgadującym'], 400);
        if($room->status == 'inactive')
            return response()->json(['error' => 'Gra jeszcze się nie rozpoczęła'], 400);
        $doesWordExist = Dictionary::where('word', $word)->exists();
        if(!$doesWordExist)
            return response()->json(['error' => 'Nie ma takiego słowa'], 400);
        $secretWord = $room->secret_word;
        if(!$secretWord)
            return response()->json(['error' => 'Nie zostało ustawione hasło'], 400);
        $colors = "";
        $length = strlen($word);
        for ($i = 0; $i < $length; $i++) {
            if ($word[$i] === $secretWord[$i]) {
                $colors = $colors . "g";
            } else if (strpos($secretWord, $word[$i]) !== false) {
                $colors = $colors . "y";
            } else {
                $colors = $colors . "b";
            }
        }
        event(new guessMade($word, $colors, $roomId, $row));
        if($room->colors)
        {
            Room::where('id', $roomId)->update(['colors' => $room->colors . " " . $colors]);
            Room::where('id', $roomId)->update(['guesses' => $room->guesses . " " . $word]);
        }
        else
        {
            Room::where('id', $roomId)->update(['colors' => $colors]);
            Room::where('id', $roomId)->update(['guesses' => $word]);
        }
        if($colors == "ggggg" || $row == 5)
        {
            Room::where('id', $roomId)->update(['status' => 'inactive']);
            Room::where('id', $roomId)->update(['secret_word' => null]);
        }
        return response()->json(['data' => 'Gites']);
    }
}
