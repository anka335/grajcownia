<?php

namespace App\Http\Controllers;

use App\Events\Message;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function message(Request $request)
    {
        
        \Log::info($request->all());
        event(new Message($request->input('username'), $request->input('message'), $request->input('roomId')));
        return [];
    }
}
