<?php namespace App\Http\Controllers;

use App\Akta_Sah_Aku_Anak;
use Input;

class AktaSahAkuAnakController extends Controller {

	function postRequest() {
		$input = Input::all();
		$akta_sah_aku_anak = new Akta_Sah_Aku_Anak;
		$akta_sah_aku_anak->fill($input);
		$akta_sah_aku_anak->request = true;
		$akta_sah_aku_anak->no_akta = time();
		$akta_sah_aku_anak->save();
		return response('success');
	}

	function getView($no_akta) {
		$akta_sah_aku_anak = Akta_Sah_Aku_Anak::whereno_akta($no_akta)->first();
		return response($akta_sah_aku_anak);
	}

	function getStatus($nik) {
		// return response('asdf');
		// $akta_lahir = Akta_Lahir::wherenik_ayah($nik)->orWhere('nik_ibu',$nik)->get();
		// return $akta_lahir;
		$akta = Akta_Sah_Aku_Anak::whereHas('aktakawin', function ($q) use ($nik) {
			return $q->wherenik_suami($nik);
		})->orWhereHas('aktakawin', function ($q) use ($nik) {
			return $q->wherenik_istri($nik);
		})->get();
		return $akta;
	}

	function postUpdate() {
		$input = Input::all();
		$akta_sah_aku_anak = Akta_Sah_Aku_Anak::whereno_akta($input['no_akta'])->first();
		$akta_sah_aku_anak->fill($input);
		$akta_sah_aku_anak->request = true;
		$akta_sah_aku_anak->save();
		return response('success');
	}

}
