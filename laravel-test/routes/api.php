<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\RoomController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\RoleChangeController;
use App\Http\Controllers\guessMadeController;
use App\Http\Controllers\SecretController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/messages', [ChatController::class, 'message']);
Route::post('/roles', [RoleChangeController::class, 'role']);
Route::post('/guess', [guessMadeController::class, 'guess']);
Route::post('/secret', [SecretController::class, 'setSecret']);
Route::apiResource('/users', UserController::class);
Route::delete('/users/delete/uid/{uid}', [UserController::class, 'deleteByUid']);
Route::apiResource('/rooms', RoomController::class);