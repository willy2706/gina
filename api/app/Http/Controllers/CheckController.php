<?php namespace App\Http\Controllers;
use App\Ktp;
use App\Anggota_KK;
class CheckController extends Controller {
	public function getNik($nik) {
		$k = Ktp::wherenik($nik)->get();
		return (count($k) > 0) ? 'true' : 'false';
	}

	public function getKkstatus($nik) {
		$k = Anggota_KK::wherenik($nik)->first();
		if (empty($k)) 
			return response ('not yet'); 
		else {
			if ($k->kk->request) return response('requested');
			else {
				if ($k->kk->message == NULL) {
					return response('approved');
				} else {
					return response('rejected');
				}
			}
		}
	}

	// public function getC
}
