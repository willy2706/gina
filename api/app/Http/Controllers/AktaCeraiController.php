<?php namespace App\Http\Controllers;

use App\Akta_Cerai;
use Input;

class AktaCeraiController extends Controller {

	public function getStatus($no_akta) {
		$k = Akta_Cerai::whereno_akta($no_akta)->get();
		return response($k);
	}

	function postRequest() {
		$input = Input::all();
		$akta_lahir = new Akta_Cerai;
		$akta_lahir->fill($input);
		$akta_lahir->request = true;
		// TODO generate no_akta
		$akta_lahir->no_akta = "1234567890";
		$akta_lahir->save();
		return response('success');
	}

	function getView($no_akta) {
		$akta_lahir = Akta_Cerai::whereno_akta($no_akta)->first();
		return response($akta_lahir);
	}

	function postUpdate() {
		$input = Input::all();
		$akta_lahir = Akta_Cerai::whereno_akta($input['no_akta'])->first();
		$akta_lahir->fill($input);
		$akta_lahir->request = true;
		$akta_lahir->save();
		return response('success');
	}

}
