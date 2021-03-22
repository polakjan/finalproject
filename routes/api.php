<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// 	});


Route::get('/user', "UserController@user");

Route::post('entity/store', "EntityController@store")->middleware('auth');
Route::get('entity/fetch', "EntityController@fetch");
Route::get('details/{id}', "EntityController@details");
Route::post('/entity/{id}/destroy',  "EntityController@destroy")->name('delete');


Route::post('/comment/store', "CommentController@store");
