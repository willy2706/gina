<?php namespace App\Http\Controllers;

use App\Akta_Mati;
use Input;

class AdminAktaMatiController extends Controller {

	function getAll() {
		$akta_mati = Akta_Mati::all();
		return response($akta_mati);
	}

	function getView($no_akta) {
		$akta_mati = Akta_Mati::whereno_akta($no_akta)->first();
		return response($akta_mati);
	}

	function getDelete($no_akta) {
		$akta_mati = Akta_Mati::whereno_akta($no_akta)->delete();
		return response('success');
	}
	
	function getApprove($no_akta) {
		$akta_mati = Akta_Mati::whereno_akta($no_akta)->first();
		$akta_mati->request = false;
		// TODO generate kota dikeluarkan
		// TODO generate tgl dikeluarkan
		// TODO generate nip kepala dinas
		$akta_mati->save();
		return response('success');
	}

	function postReject($no_akta) {
		$input = Input::all();
		$akta_mati = Akta_Mati::whereno_akta($no_akta)->first();
		$akta_mati->message = $input['message'];
		$akta_mati->request = true;
		$akta_mati->save();
		return response('success');
	}

}
