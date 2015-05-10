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
		$akta_cerai = new Akta_Cerai;
		$akta_cerai->fill($input);
		$akta_cerai->request = true;
		// TODO generate no_akta
		//$akta_cerai->no_akta = "0987654321";
		$akta_cerai->no_akta = time();
		$akta_cerai->save();
		return response('success');
	}

	function getView($no_akta) {
		$akta_cerai = Akta_Cerai::whereno_akta($no_akta)->first();
		return response($akta_cerai);
	}

	function postUpdate() {
		$input = Input::all();
		$akta_cerai = Akta_Cerai::whereno_akta($input['no_akta'])->first();
		$akta_cerai->fill($input);
		$akta_cerai->request = true;
		$akta_cerai->save();
		return response('success');
	}

}
