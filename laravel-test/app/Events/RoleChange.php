<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class RoleChange implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $roomId;
    public $role;
    public $uid;
    public function __construct($roomId, $role, $uid)
    {
        $this->roomId = $roomId;
        $this->role = $role;
        $this->uid = $uid;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('role-room-' . $this->roomId);
    }

    public function broadCastAs()
    {
        return 'rolechange';
    }
}
