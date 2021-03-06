<?php namespace App\Http\Controllers;

use App\Ktp;
use App\Anggota_KK;
use App\Akta_Lahir;
use App\Akta_Mati;
use App\Akta_Kawin;
use App\Akta_Sah_Aku_Anak;
use Auth;
class CheckController extends Controller {
	public function getAuthenticated() {
		$v = \Cookie::get('pplbandung');
		return $v == false ? 'false' : $v;
	}
	public function getNik($nik) {
		$k = Ktp::wherenik($nik)->get();
		return (count($k) > 0) ? 'true' : 'false';
	}

	public function getNoaktalahir($no) {
		$k = Akta_Lahir::whereno_akta($no)->get();
		return (count($k) > 0) ? 'true' : 'false';
	}

	public function getNoaktakawin($no) {
		$k = Akta_Kawin::whereno_akta($no)->get();
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

	public function getKtp($id) {
		Auth::logout();
		Auth::loginUsingId($id);
		return Auth::user();
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
		$akta_mati = Akta_Mati::wherenik($nik)->first();
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
	
	public function getAktakawinstatus($nik) {
		//return response($nik);
		$akta_kawin_suami = Akta_Kawin::wherenik_suami($nik)->first();
		//return response($akta_kawin_suami);
		$akta_kawin_istri = Akta_Kawin::wherenik_istri($nik)->first();
		//return response($akta_kawin_istri);
		if ((empty($akta_kawin_suami) || $akta_kawin_suami == null) && (empty($akta_kawin_istri) || $akta_kawin_istri == null)) {
			return response ('not yet');
		} else {
			// return $akta_kawin_istri == null ? 'asdf' : 'aassdf';	
			if ($akta_kawin_suami) {
				if ($akta_kawin_suami->request) {
					return response('requested');
				} else {
					if ($akta_kawin_suami->message == NULL) {
						return response('approved');
					} else {
						return response('rejected');
					}
				}
			} else {
				if ($akta_kawin_istri->request) {
					return response('requested');
				} else {
					if ($akta_kawin_istri->message == NULL) {
						return response('approved');
					} else {
						return response('rejected');
					}
				}
			}
		}
	}

	public function getAktakawinexiststatus($no_akta) {
		//return response($nik);
		$akta_kawin = Akta_Kawin::whereno_akta($no_akta)->first();
		//return response($akta_kawin_istri);
		if (empty($akta_kawin)) {
			return response ('not exist');
		} else {
			return response ('exist');
		}
	}

	public function getAktasahakuanakstatus($nik) {
		$akta_sah_aku_anak = Akta_Sah_Aku_Anak::wherenik($nik)->first();
		
		if (empty($akta_sah_aku_anak)) {
			return response ('not yet');
		} else {
			if ($akta_sah_aku_anak->request) {
				return response('requested');
			} else {
				if ($akta_sah_aku_anak->message == NULL) {
					return response('approved');
				} else {
					return response('rejected');
				}
			}
		}
	}

	public function getSelfaktacerai($no_akta_kawin, $nik) {
		$akta_kawin = Akta_Kawin::whereno_akta($no_akta_kawin)->first();
		// return response($akta_kawin);
		if($akta_kawin->nik_suami == $nik || $akta_kawin->nik_istri == $nik) return 'true';
		return 'false';
	}

	public function getSelfaktakawin($no_akta_kawin, $nik) {
		$akta_kawin = Akta_Kawin::whereno_akta($no_akta_kawin)->first();
		// return response($akta_kawin);
		if($akta_kawin->nik_suami == $nik || $akta_kawin->nik_istri == $nik) return 'true';
		return 'false';	
	}

	public function getAnaksendiri($no_akta_lahir, $nik) {
		$akta_lahir = Akta_Lahir::whereno_akta($no_akta_lahir)->first();
		if ($akta_lahir->nik_ayah == $nik) return 'true';
		if ($akta_lahir->nik_ibu == $nik) return 'true';
		return 'false';
	}

}
