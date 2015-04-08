<?php namespace App\Http\Controllers;
use App\Ktp;
class CheckController extends Controller {
	public function getNik($nik) {
		$k = Ktp::wherenik($nik)->get();
		return (count($k) > 0) ? 'true' : 'false';
	}
}
