<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Room;
use App\Models\User;
use Illuminate\Http\Request;
use Pusher\Pusher;
class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $rooms = Room::all();
        $rooms = $rooms->toArray();

        return response()->json($rooms);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'nullable',
            'status' => 'required|in:active,inactive',
            'game_type' => 'nullable|in:chess,checkers,battleships,wordle',
            'guesser_id' => 'nullable',
            'selector_id' => 'nullable'
        ]);
        //\Log::info($request->all());
        $room = Room::create($request->all());

        return response()->json(['data' => $room], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Room  $room
     * @return \Illuminate\Http\Response
     */
    public function show(Room $room)
    {
        $selector = User::where('id', $room->selector_id)->first();
        $guesser = User::where('id', $room->guesser_id)->first();
        if($selector)
        {
            $s_uid = $selector->uid;
            if($selector->name)
                $s_name = $selector->name;
            else
                $s_name = "Anon";
        }
        else
        {
            $s_uid = null;
            $s_name = "";
        }
        if($guesser)
        {
            $g_uid = $guesser->uid; 
            if($guesser->name)
                $g_name = $guesser->name;
            else
                $g_name = "Anon";
        }
        else
        {
            $g_uid = null;
            $g_name = "";
        }
        $excludeKeys = ["created_at", "updated_at"];
        $roomInfo = array_diff_key($room->toArray(), array_flip($excludeKeys));
        return response()->json(['roomInfo' => $roomInfo, 'selector' => ['name' => $s_name], 'guesser' => ['name' => $g_name]]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Room  $room
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Room $room)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'nullable',
            'status' => 'required|in:active,inactive',
            'game_type' => 'nullable|in:chess,checkers,battleships,wordle',
            // inne wymagane pola
        ]);

        $room->update($request->all());

        return response()->json(['data' => $room]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Room  $room
     * @return \Illuminate\Http\Response
     */
    public function destroy(Room $room)
    {
        $room->delete();

        return response()->json(null, 204);
    }
}
