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

	function postCreate() {
		$input = Input::all();
		$kk = new KK();

		$kk->no_kk = $this->getTimestamp();

		$kk->nik_kepala_kel = $input['nik_kepala_kel'];
		$kk->request = false;
		$kk->alamat = $input['alamat'];
		$kk->save();

		for ($i = 1; $i <= $input['anggota_count']; $i++) {
			$anggota_kk = new Anggota_KK();
			$anggota_kk->no_kk = $kk->no_kk;
			$anggota_kk->nik = $input['nik'][$i];
			$anggota_kk->pendidikan = $input['pendidikan'][$i];
			$anggota_kk->status_hub = $input['status_hub'][$i];
			//TODO
			$anggota_kk->nik_ayah = $kk->nik_kepala_kel;
			$anggota_kk->nik_ibu = $kk->nik_kepala_kel;
			// $anggota_kk->nik_ayah = $input['nik_ayah_' . $i];
			// $anggota_kk->nik_ibu = $input['nik_ibu_' . $i];
			$anggota_kk->save();
		}

		return response('success');
	}

}
