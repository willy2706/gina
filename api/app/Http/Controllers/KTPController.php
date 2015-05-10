<?php namespace App\Http\Controllers;

use App\Ktp;

class KTPController extends Controller {
	public function getIndex($nik) {
		return response(Ktp::wherenik($nik)->first());
	}
}
