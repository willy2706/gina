<?php namespace App\Http\Controllers;

use App\Akta_Lahir;
use Input;

class AktaLahirController extends Controller {

	function postRequest() {
		$input = Input::all();
		$akta_lahir = new Akta_Lahir;
		$akta_lahir->fill($input);
		$akta_lahir->request = true;
		// TODO generate no_akta
		$akta_lahir->no_akta = time();
		$akta_lahir->save();
		return response('success');
	}

	function getView($no_akta) {
		$akta_lahir = Akta_Lahir::whereno_akta($no_akta)->first();
		return response($akta_lahir);
	}

	function postUpdate() {
		$input = Input::all();
		$akta_lahir = Akta_Lahir::whereno_akta($input['no_akta'])->first();
		$akta_lahir->fill($input);
		$akta_lahir->request = true;
		$akta_lahir->save();
		return response('success');
	}

}
