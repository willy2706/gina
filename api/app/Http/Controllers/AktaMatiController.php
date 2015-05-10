<?php namespace App\Http\Controllers;

use App\Akta_Mati;
use Input;

class AktaMatiController extends Controller {

	function postRequest() {
		$input = Input::all();
		$akta_mati = new Akta_Mati;
		$akta_mati->fill($input);
		$akta_mati->request = true;
		$akta_mati->no_akta = time();
		$akta_mati->save();
		return response('success');
	}

	function getView($no_akta) {
		$akta_mati = Akta_Mati::whereno_akta($no_akta)->first();
		return response($akta_mati);
	}

	public function getStatus($nik) {
		$akta_mati = Akta_Mati::wherenik_request($nik)->get();
		return $akta_mati;
	}

	function postUpdate() {
		$input = Input::all();
		$akta_mati = Akta_Mati::whereno_akta($input['no_akta'])->first();
		$akta_mati->fill($input);
		$akta_mati->request = true;
		$akta_mati->save();
		return response('success');
	}

}
