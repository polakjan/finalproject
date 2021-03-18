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

Route::get('/user',"UserController@user");

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// 	// dd(Auth::user());
// 	// dd($request);
// 	// return ['user'=>Auth::user()];
// });

// Route::group(['middleware' => 'web'], function () {

//     Route::auth();
//     // Moving here will ensure that sessions, csrf, etc. is included in all these routes
//     // Route::group(['prefix'=>'admin',  'middleware' => 'admin'], function(){
//     //     Route::get('/', function(){
//     //         return view('admin.index');
//     //     });

// Route::get('user', [UserController::class, 'user']);

          
  
// });


// Route::get('/user', [UserController::class, 'user'])->middleware('web');

// Route::get('/user', 'UserController@user')->middleware('auth');

