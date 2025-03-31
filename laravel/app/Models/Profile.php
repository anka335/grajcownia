<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'who_can_watch',
        'chess_rating',
        'checkers_rating',
        'wordle_rating',
        'battleships_rating'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}