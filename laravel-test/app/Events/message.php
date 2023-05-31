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

  public function __construct($username, $message)
  {
    $this->message = $message;
    $this->username = $username;
  }

  public function broadcastOn()
  {
      return ['chat'];
  }

  public function broadcastAs()
  {
      return 'message';
  }
}