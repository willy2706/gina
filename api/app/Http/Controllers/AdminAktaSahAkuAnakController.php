<?php namespace App\Http\Controllers;

use App\Akta_Sah_Aku_Anak;
use Input;

class AdminAktaSahAkuAnakController extends Controller {

	function getAll() {
		$akta_sah_aku_anak = Akta_Sah_Aku_Anak::all();
		return response($akta_sah_aku_anak);
	}

	function getView($no_akta) {
		$akta_sah_aku_anak = Akta_Sah_Aku_Anak::whereno_akta($no_akta)->first();
		return response($akta_sah_aku_anak);
	}

	function getDelete($no_akta) {
		$akta_sah_aku_anak = Akta_Sah_Aku_Anak::whereno_akta($no_akta)->delete();
		return response('success');
	}
	
	function getApprove($no_akta) {
		$akta_sah_aku_anak = Akta_Sah_Aku_Anak::whereno_akta($no_akta)->first();
		$akta_sah_aku_anak->message = "";
		$akta_sah_aku_anak->request = false;
		$akta_sah_aku_anak->save();
		return response('success');
	}

	function postReject($no_akta) {
		$input = Input::all();
		$akta_sah_aku_anak = Akta_Sah_Aku_Anak::whereno_akta($no_akta)->first();
		$akta_sah_aku_anak->message = $input['message'];
		$akta_sah_aku_anak->request = false;
		$akta_sah_aku_anak->save();
		return response('success');
	}

}
