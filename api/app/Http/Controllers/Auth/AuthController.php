<?php namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Contracts\Auth\Registrar;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;
use Illuminate\Http\Request;
use Auth;
use Symfony\Component\HttpFoundation\Cookie;

class AuthController extends Controller {

	/*
	|--------------------------------------------------------------------------
	| Registration & Login Controller
	|--------------------------------------------------------------------------
	|
	| This controller handles the registration of new users, as well as the
	| authentication of existing users. By default, this controller uses
	| a simple trait to add these behaviors. Why don't you explore it?
	|
	*/

	use AuthenticatesAndRegistersUsers;

	/**
	 * Create a new authentication controller instance.
	 *
	 * @param  \Illuminate\Contracts\Auth\Guard  $auth
	 * @param  \Illuminate\Contracts\Auth\Registrar  $registrar
	 * @return void
	 */
	public function __construct(Guard $auth, Registrar $registrar) {
		$this->auth = $auth;
		$this->registrar = $registrar;

		$this->middleware('guest', ['except' => 'getLogout']);
	}

	public function postLogin(Request $request) {
		$r = $request->all();	
		if (Auth::attempt(['nik' => $r['nik'], 'password' => $r['password']])) {
			return response(Auth::user())->withCookie(cookie('pplbandung', Auth::user()->id, 20));
		}
		return 'false';
	}

	public function getLogin() {
		return 'login';
	}

	public function getLogout() {
		
	}

	public function getCheck(Request $req) {
		return $req;
		$v = \Cookie::get('pplbandung');
		return $v == false ? 'false' : $v;
		// var_dump($req->ajax());
		// var_dump(Auth::user());
		// return (Auth::check()) ? 'true' : 'false';
	}

}
