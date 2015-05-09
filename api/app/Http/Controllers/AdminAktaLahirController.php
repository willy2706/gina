<?php namespace App\Http\Controllers;

use App\Akta_Lahir;
use Input;
use App\Ktp;

class AdminAktaLahirController extends Controller {

	function getAll() {
		$akta_lahir = Akta_Lahir::all();
		return response($akta_lahir);
	}

	function getView($no_akta) {
		$akta_lahir = Akta_Lahir::whereno_akta($no_akta)->first();
		return response($akta_lahir);
	}

	function getDelete($no_akta) {
		$akta_lahir = Akta_Lahir::whereno_akta($no_akta)->delete();
		return response('success');
	}
	
	function getApprove($no_akta) {
		$akta_lahir = Akta_Lahir::whereno_akta($no_akta)->first();
		$akta_lahir->message = "";
		$akta_lahir->request = false;
		// TODO generate nik
		// TODO generate kota dikeluarkan
		// TODO generate tgl dikeluarkan
		// TODO generate nip kepala dinas
		$akta_lahir->save();
		return response('success');
	}

	function postReject($no_akta) {
		$input = Input::all();
		$akta_lahir = Akta_Lahir::whereno_akta($no_akta)->first();
		$akta_lahir->message = $input['message'];
		$akta_lahir->request = false;
		$akta_lahir->save();
		return response('success');
	}

	public function postCreate() {
		$input = Input::all();
		$mynik = $this->getTimeStamp();

		$ktp = new Ktp;
		$ktp->nik = $mynik;
		$ktp->nama = $input['nama'];
		$ktp->password = $ktp->nik;
		$ktp->username = $ktp->nik;
		$ktp->kota_lahir = $input['tempat_lahir'];
		$ktp->tanggal_lahir = $input['tgl_lahir'];
		$ktp->save();

		$akta_lahir = new Akta_Lahir;
		$akta_lahir->fill($input);
		$akta_lahir->request = false;
		$akta_lahir->nik = $mynik;
		$akta_lahir->no_akta = $this->getTimeStamp();
		$akta_lahir->save();

		return response('success');
	}

}
