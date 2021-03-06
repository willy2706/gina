<?php namespace App\Http\Controllers;

use App\MP;
use App\Pengikut_MP;
use Input;
use Request;

class MPController extends Controller {

	public function getStatus($nik) {
		$k = MP::wherenik($nik)->get();
		return response($k);
	}

	function postRequest() {
		$input = Input::all();
		//return response($input);
		$mp = new MP();
		// $mp->no_mp = genereate string
		$mp->no_mp = $this->getTimestamp();
		$mp->nik = $input['nik'];
		$mp->alamat_tujuan = $input['alamat_tujuan'];
		$mp->request = true;
		$mp->save();

		for ($i = 1; $i <= $input['pengikut_count']; $i++) {
			$pengikut_mp = new Pengikut_MP();
			$pengikut_mp->no_mp = $mp->no_mp;
			$pengikut_mp->nik_pengikut = $input['nik_pengikut'][$i];
			$pengikut_mp->pekerjaan_pengikut = $input['pekerjaan'][$i];
			$pengikut_mp->status_kel_pengikut = $input['status_kel'][$i];
			$pengikut_mp->save();
		}

		return response('success');
	}

	function getView($no_mp) {
		$mp = MP::where('no_mp', $no_mp)->first();
		$pengikut_mp = Pengikut_MP::where('no_mp', $no_mp)->get();

		return response($mp . $pengikut_mp);
	}

	function postUpdate() {
		$input = Input::all();

		$mp = MP::where('no_mp', $input['no_mp'])->first();
		$mp->nik = $input['nik'];
		$mp->alamat_tujuan = $input['alamat_tujuan'];
		$mp->request = true;
		$mp->save();

		Pengikut_MP::where('no_mp', $input['no_mp'])->delete();
		for ($i = 1; $i <= $input['pengikut_count']; $i++) {
			$pengikut_mp = new Pengikut_MP();
			$pengikut_mp->no_mp = $mp->no_mp;
			$pengikut_mp->nik_pengikut = $input['nik_' . $i];
			$pengikut_mp->pekerjaan_pengikut = $input['pekerjaan_' . $i];
			$pengikut_mp->status_kel_pengikut = $input['status_kel_' . $i];
			$pengikut_mp->save();
		}
		
		return response('success');
	}

}
