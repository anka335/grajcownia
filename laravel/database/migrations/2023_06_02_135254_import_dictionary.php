<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class ImportDictionary extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $file = storage_path('app/slowa.txt'); // Ścieżka do pliku "slownik.txt"

        $words = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES); // Odczytaj słowa z pliku

        $data = array_map(function ($word) {
            return ['word' => $word];
        }, $words);

        DB::table('dictionaries')->insert($data); // Wstaw słowa do tabeli "dictionary"
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::table('dictionaries')->truncate(); // Usuń wszystkie słowa z tabeli "dictionary"
    }
}