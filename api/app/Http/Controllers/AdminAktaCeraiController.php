<?php namespace App\Http\Controllers;

use App\Akta_Cerai;
use Input;

class AdminAktaCeraiController extends Controller {

	function getAll() {
		$akta_cerai = Akta_Cerai::all();
		return response($akta_cerai);
	}

	function getView($no_akta) {
		$akta_cerai = Akta_Cerai::whereno_akta($no_akta)->first();
		return response($akta_cerai);
	}

	function getDelete($no_akta) {
		$akta_cerai = Akta_Cerai::whereno_akta($no_akta)->delete();
		return response('success');
	}
	
	function getApprove($no_akta) {
		$akta_cerai = Akta_Cerai::whereno_akta($no_akta)->first();
		$akta_cerai->message = "";
		$akta_cerai->request = false;
		// TODO generate kota dikeluarkan
		// TODO generate tgl dikeluarkan
		// TODO generate nip kepala dinas
		$akta_cerai->save();
		return response('success');
	}

	function postReject($no_akta) {
		$input = Input::all();
		$akta_cerai = Akta_Cerai::whereno_akta($no_akta)->first();
		$akta_cerai->message = $input['message'];
		$akta_cerai->request = false;
		$akta_cerai->save();
		return response('success');
	}

	public function postCreate() {
		$input = Input::all();
		$akta_cerai = new Akta_Cerai;
		$akta_cerai->fill($input);
		$akta_cerai->request = false;

		$akta_cerai->no_akta = time();
		$akta_cerai->save();
		return response('success');
	}

}
