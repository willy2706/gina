<?php namespace App\Http\Controllers;

use App\Akta_Kawin;
use Input;

class AdminAktaKawinController extends Controller {

	function getAll() {
		$akta_kawin = Akta_Kawin::all();
		return response($akta_kawin);
	}

	function getView($no_akta) {
		$akta_kawin = Akta_Kawin::whereno_akta($no_akta)->first();
		return response($akta_kawin);
	}

	function getDelete($no_akta) {
		$akta_kawin = Akta_Kawin::whereno_akta($no_akta)->delete();
		return response('success');
	}
	
	function getApprove($no_akta) {
		$akta_kawin = Akta_Kawin::whereno_akta($no_akta)->first();
		$akta_kawin->message = "";
		$akta_kawin->request = false;
		$akta_kawin->save();
		return response('success');
	}

	function postReject($no_akta) {
		$input = Input::all();
		$akta_kawin = Akta_Kawin::whereno_akta($no_akta)->first();
		$akta_kawin->message = $input['message'];
		$akta_kawin->request = false;
		$akta_kawin->save();
		return response('success');
	}

}
