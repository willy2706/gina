<?php namespace App\Http\Controllers;

use App\Ktp;
use App\Anggota_KK;
use App\Akta_Lahir;

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

	public function getAktalahirstatus($nik) {
		$akta_lahir = Akta_Lahir::wherenik($nik)->first();
		//return response($akta_lahir);
		
		if (empty($akta_lahir)) {
			return response ('not yet');
		} else {
			if ($akta_lahir->request) {
				return response('requested');
			} else {
				if ($akta_lahir->message == NULL) {
					return response('approved');
				} else {
					return response('rejected');
				}
			}
		}
	}

	public function getAktamatistatus($nik) {
		//return response($nik);
		$akta_mati = Akta_Mati::wherenik($nik)->get();
		//return response($akta_mati);

		if (empty($akta_mati)) {
			return response ('not yet');
		} else {
			if ($akta_mati->request) {
				return response('requested');
			} else {
				if ($akta_mati->message == NULL) {
					return response('approved');
				} else {
					return response('rejected');
				}
			}
		}
	}

	public function getKkByNik($nik) {
		
	}

}
