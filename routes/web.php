<?php

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Auth::routes();
Route::middleware('auth')->group(function () {
    Route::prefix('data')->group(function () {
        Route::get('users', function () {
            return User::all();
        });
        Route::get('user/{id}', function ($id = null) {
            return User::findOrFail($id);
        });
        Route::post('user/{id}', function (Request $request) {
            $user = User::find($request['id']);
            $user->update($request->input());
            $user->save();
            return $user;
        });
    });
    Route::get('/{any}', 'HomeController@index')->where('any', '.*');
});


