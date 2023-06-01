<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRoomsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rooms', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->enum('game_type', ['chess', 'checkers', 'battleships', 'wordle'])->default('wordle');
            // inne pola

            $table->unsignedBigInteger('guesser_id')->nullable()->default(null);
            $table->foreign('guesser_id')->references('id')->on('users')->onDelete('cascade');

            $table->unsignedBigInteger('selector_id')->nullable()->default(null);
            $table->foreign('selector_id')->references('id')->on('users')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rooms');
    }
}