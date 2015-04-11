<?php namespace App\Http\Controllers;

use App\MP;
use App\Pengikut_MP;
use Input;
use Request;

class AdminMPController extends Controller {

	function getAll() {
		$mp = MP::all();

		return response($mp);
	}

	function getView($no_mp) {
		$mp = MP::where('no_mp', $no_mp)->first();

		return response($mp);
	}

	function getDelete($no_mp) {
		$mp = MP::where('no_mp', $no_mp)->delete();

		return response('success');
	}
	
	function getApprove($no_mp) {
		$mp = MP::where('no_mp', $no_mp)->first();
		$mp->request = false;
		$mp->save();

		$pengikut_mp_baru = Pengikut_MP::where('no_mp', $no_mp)->get();
		foreach ($pengikut_mp_baru as $baru) {
			$pengikut_mp_lama = Pengikut_MP::where('nik_pengikut', $baru->nik)->where('no_mp', '!=', $no_mp)->delete();
		}

		return response('success');
	}

	function postDecline() {
		$input = Input::all();

		$mp = MP::where('no_mp', $input['no_mp'])->first();
		$mp->message = $input['message'];
		$mp->save();

		return response('success');
	}

}
