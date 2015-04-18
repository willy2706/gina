<?php namespace App\Http\Controllers;

use App\KK;
use App\Anggota_KK;
use Input;
use Request;

class AdminKKController extends Controller {

	function getAll() {
		$kk = KK::all();

		return response($kk);
	}

	function getView($no_kk) {
		$kk = KK::where('no_kk', $no_kk)->first();
		return response($kk);
	}

	function getDelete($no_kk) {
		$kk = KK::where('no_kk', $no_kk)->delete();

		return response('success');
	}
	
	function getApprove($no_kk) {
		$kk = KK::where('no_kk', $no_kk)->first();
		$kk->request = false;
		$kk->save();

		$anggota_kk_baru = Anggota_KK::where('no_kk', $no_kk)->get();
		foreach ($anggota_kk_baru as $baru) {
			$anggota_kk_lama = Anggota_KK::where('nik', $baru->nik)->where('no_kk', '!=', $no_kk)->delete();
		}

		return response('success');
	}

	function postReject($no_kk) {
		$input = Input::all();

		$kk = KK::whereno_kk($no_kk)->first();
		$kk->message = $input['message'];
		$kk->request = false;
		$kk->save();

		return response('success');
	}

}
