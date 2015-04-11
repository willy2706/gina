<?php namespace App\Http\Controllers;

use App\MP;
use App\Pengikut_MP;
use Input;
use Request;

class MPController extends Controller {

	function getRequest() {
		$mp = new MP();

		return response($mp);
	}

	function postRequest() {
		$input = Input::all();

		$mp = new MP();
		// $mp->no_mp = genereate string
		$mp->no_mp = '1234567890';
		$mp->nik = $input['nik'];
		$mp->alamat_tujuan = $input['alamat_tujuan'];
		$mp->save();

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

	function getView() {
		$no_mp = Request::get('no_mp');
		$mp = MP::where('no_mp', $no_mp)->get();

		return response($mp);
	}

	function getUpdate() {
		$no_mp = Request::get('no_mp');
		$mp = MP::where('no_mp', $no_mp)->get();
		$pengikut_mp = Pengikut_MP::where('no_mp', $no_mp)->get();

		return response($pengikut_mp);
	}

	function postUpdate() {
		$input = Input::all();

		$mp = MP::where('no_mp', $input['no_mp'])->first();
		$mp->nik = $input['nik'];
		$mp->alamat_tujuan = $input['alamat_tujuan'];
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
		
		return response($mp);
	}

}
