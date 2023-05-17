<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'description',
        'status',
        'game_type',
        'user_id',
        // inne pola
    ];

    // Relacja z użytkownikami (twórcą pokoju i użytkownikami w pokoju)
    public function creator()
    {
        return $this->belongsTo(User::class, 'id');
    }

    public function users()
    {
        return $this->hasMany(User::class);
    }

    // Metoda dołączania użytkownika do pokoju
    public function addUser(User $user)
    {
        $this->users()->attach($user->id);
    }

    // Metoda usuwania użytkownika z pokoju
    public function removeUser(User $user)
    {
        $this->users()->detach($user->id);
    }
}
