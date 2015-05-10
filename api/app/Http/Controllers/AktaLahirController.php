<?php namespace App\Http\Controllers;

use App\Akta_Lahir;
use Input;
use App\Ktp;

class AktaLahirController extends Controller {

	function postRequest() {
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
		$akta_lahir->request = true;
		$akta_lahir->nik = $mynik;
		$akta_lahir->no_akta = $this->getTimeStamp();
		$akta_lahir->save();

		return response('success');
	}

	function getView($no_akta) {
		$akta_lahir = Akta_Lahir::whereno_akta($no_akta)->first();
		return response($akta_lahir);
	}

	function postUpdate() {
		$input = Input::all();
		$akta_lahir = Akta_Lahir::whereno_akta($input['no_akta'])->first();
		$akta_lahir->fill($input);
		$akta_lahir->request = true;
		$akta_lahir->save();
		return response('success');
	}

	public function getStatus($nik) {
		$akta_lahir = Akta_Lahir::wherenik_ayah($nik)->orWhere('nik_ibu',$nik)->get();
		return $akta_lahir;
	}

}
