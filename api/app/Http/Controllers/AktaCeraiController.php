<?php namespace App\Http\Controllers;

use App\Akta_Cerai;
use Input;

class AktaCeraiController extends Controller {

	function postRequest() {
		$input = Input::all();
		$akta_cerai = new Akta_Cerai;
		$akta_cerai->fill($input);
		$akta_cerai->request = true;
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

	public function getStatus($nik) {
		$akta_cerai = Akta_Cerai::whereHas('aktakawin', function ($q) use ($nik) {
			$q->wherenik_istri($nik);
		})->orWhereHas('aktakawin', function ($q) use ($nik) {
			$q->wherenik_suami($nik);
		})->get();
		return response($akta_cerai);
	}

}
