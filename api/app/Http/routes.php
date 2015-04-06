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
]);

Route::controller('kk', 'KKController');
// Route::group(['prefix' => '/kk'], function() {

	// Route::get('/request', 'KKController@getRequest');
	// Route::post('/request', 'KKController@postRequest');
	// Route::get('/view', 'KKController@getView');
	// Route::get('/update', 'KKController@getUpdate');

// });

Route::group(['prefix' => 'admin'], function() {
	
	Route::controller('login', 'AdminController');
	Route::controller('logout', 'AdminController');
	
	Route::group(['prefix' => 'ktp'], function() {

		Route::controller('create', 'AdminKTPController');
		Route::controller('view', 'AdminKTPController');
		Route::controller('update', 'AdminKTPController');
		Route::controller('delete', 'AdminKTPController');

	});

	Route::group(['prefix' => 'kk'], function() {

		Route::controller('view', 'AdminKKController');
		Route::controller('delete', 'AdminKKController');
		Route::controller('approve', 'AdminKKController');
		Route::controller('decline', 'AdminKKController');

	});
});

//testing
Route::get('fileentry', 'PhotoController@index');
Route::get('fileentry/get/{filename}', [
	'as' => 'getentry', 'uses' => 'PhotoController@get'
]);
Route::post('fileentry/add',[
	'as' => 'addentry', 'uses' => 'PhotoController@add'
]);
