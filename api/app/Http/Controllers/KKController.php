<?php namespace App\Http\Controllers;

use App\KK;
use App\Anggota_KK;
use Input;
use Request;

class KKController extends Controller {

	function getRequest() {
		$kk = new KK();

		return response($kk);
	}

	function postRequest() {
		$input = Input::all();

		$kk = new KK();
		// $kk->no_kk = generate string
		$kk->no_kk = '1234567890';
		$kk->nik_kepala_kel = $input['nik_kepala_kel'];
		$kk->request = true;
		$kk->save();

		for ($i = 1; $i <= $input['anggota_count']; $i++) {
			$anggota_kk = new Anggota_KK();
			$anggota_kk->no_kk = $kk->no_kk;
			$anggota_kk->nik = $input['nik_' . $i];
			$anggota_kk->pendidikan = $input['pendidikan_' . $i];
			$anggota_kk->status_hub = $input['status_hub_' . $i];
			$anggota_kk->nik_ayah = $input['nik_ayah_' . $i];
			$anggota_kk->nik_ibu = $input['nik_ibu_' . $i];
			$anggota_kk->save();
		}

		return response('success');
	}

	function getView() {
		$no_kk = Request::get('no_kk');
		$kk = KK::where('no_kk', $no_kk)->get();

		return response($kk);
	}

	function getUpdate() {
		$no_kk = Request::get('no_kk');
		$kk = KK::where('no_kk', $no_kk)->get();
		$anggota_kk = Anggota_KK::where('no_kk', $no_kk)->get();

		return response($anggota_kk);
	}

	function postUpdate() {
		$input = Input::all();

		$kk = KK::where('no_kk', $input['no_kk'])->first();
		$kk->nik_kepala_kel = $input['nik_kepala_kel'];
		$kk->request = true;
		$kk->save();

		Anggota_KK::where('no_kk', $input['no_kk'])->delete();
		for ($i = 1; $i <= $input['anggota_count']; $i++) {
			$anggota_kk = new Anggota_KK();
			$anggota_kk->no_kk = $kk->no_kk;
			$anggota_kk->nik = $input['nik_' . $i];
			$anggota_kk->pendidikan = $input['pendidikan_' . $i];
			$anggota_kk->status_hub = $input['status_hub_' . $i];
			$anggota_kk->nik_ayah = $input['nik_ayah_' . $i];
			$anggota_kk->nik_ibu = $input['nik_ibu_' . $i];
			$anggota_kk->save();
		}
		
		return response($kk);
	}

}
