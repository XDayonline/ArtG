<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


Route::middleware('auth')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', 'RegisterController@register');
Route::post('login', 'RegisterController@login');

Route::middleware('auth:api')->group( function () {
    Route::apiResource('cars', 'CarController');
//    Route::get('car', 'CarController@index');
//    Route::get('car/{id}', 'CarController@show');
//    Route::post('car', 'CarController@store');
//    Route::put('car/{id}', 'CarController@update');
//    Route::delete('car/{id}', 'CarController@destroy');
});
