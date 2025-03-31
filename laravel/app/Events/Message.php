<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class Message implements ShouldBroadcast
{
  use Dispatchable, InteractsWithSockets, SerializesModels;

  public $message;
  public $username;
  public $roomId;
  public function __construct($username, $message, $roomId)
  {
    $this->message = $message;
    $this->username = $username;
    $this->roomId = $roomId;
  }

  public function broadcastOn()
  {
      return new Channel('game-room-' . $this->roomId);
  }

  public function broadcastAs()
  {
      return 'message';
  }
}
