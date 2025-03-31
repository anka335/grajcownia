<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('chess_rating')->default(1000);
            $table->unsignedBigInteger('checkers_rating')->default(1000);
            $table->unsignedBigInteger('wordle_rating')->default(1000);
            $table->unsignedBigInteger('battleships_rating')->default(1000);
            $table->enum('who_can_watch', ['wszyscy', 'znajomi', 'nikt'])->default('znajomi');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profiles');
    }
}