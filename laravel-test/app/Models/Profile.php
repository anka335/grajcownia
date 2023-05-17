<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'nick',
        'who_can_watch'
        // Dodaj inne atrybuty profilu
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}