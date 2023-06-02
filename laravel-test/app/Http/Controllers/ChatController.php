<?php

namespace App\Http\Controllers;

use App\Events\Message;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function message(Request $request)
    {
        $username = $request->input('username');
        $message = $request->input('message');
        $roomId = $request->input('roomId');
        if(!$username){
            $username = "Anon";
        }
        if($message){
            event(new Message($username, $message, $roomId));
        }
        return [];
    }
}
