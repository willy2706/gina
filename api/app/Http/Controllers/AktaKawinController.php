<?php namespace App\Http\Controllers;

use App\Akta_Kawin;
use Input;

class AktaKawinController extends Controller {

	function postRequest() {
		$input = Input::all();
		$akta_kawin = new Akta_Kawin;
		$akta_kawin->fill($input);
		$akta_kawin->request = true;
		// TODO generate no_akta
		$akta_kawin->no_akta = time();
		$akta_kawin->save();
		return response('success');
	}

	function getView($no_akta) {
		$akta_kawin = Akta_Kawin::whereno_akta($no_akta)->first();
		return response($akta_kawin);
	}

	function postUpdate() {
		$input = Input::all();
		$akta_kawin = Akta_Kawin::whereno_akta($input['no_akta'])->first();
		$akta_kawin->fill($input);
		$akta_kawin->request = true;
		$akta_kawin->save();
		return response('success');
	}

	public function getStatus($nik) {
		$akta_kawin = Akta_Kawin::wherenik_suami($nik)->orWhere('nik_istri',$nik)->get();
		return $akta_kawin;
	}

}
