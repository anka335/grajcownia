<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class guessMade implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $word;
    public $colors;
    public $roomId;
    public $row;
    public function __construct($word, $colors, $roomId, $row)
    {
        $this->word = $word;
        $this->colors = $colors;
        $this->roomId = $roomId;
        $this->row = $row;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('guess-room-' . $this->roomId);
    }

    public function broadcastAs()
    {
        return 'guess';
    }
}
