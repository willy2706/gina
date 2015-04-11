<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'WelcomeController@index');

Route::get('home', 'HomeController@index');

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
	'check' => 'CheckController'
]);

Route::controller('kk', 'KKController');

Route::controller('mp', 'MPController');

Route::group(['prefix' => 'admin'], function() {

	// Route::controller('login', 'AdminController');
	// Route::controller('logout', 'AdminController');

	Route::controller('ktp', 'AdminKTPController');

	Route::controller('kk', 'AdminKKController');

	Route::controller('mp', 'AdminMPController');
});

//testing
Route::get('fileentry', 'PhotoController@index');
Route::get('fileentry/get/{filename}', [
	'as' => 'getentry', 'uses' => 'PhotoController@get'
]);
Route::post('fileentry/add',[
	'as' => 'addentry', 'uses' => 'PhotoController@add'
]);