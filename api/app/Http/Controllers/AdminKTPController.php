<?php namespace App\Http\Controllers;

use App\KTP;
use Input;
use Request;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class AdminKTPController extends Controller {

	function postCreate() {
		$input = Input::all();
		// return response($input);

		$ktp = new KTP();
		$ktp->fill($input);
		$ktp->nik = $this->getTimestamp();
		$ktp->save();
		// $foto = Request::file('foto');
		// Storage::disk('local')->put('foto_' . $ktp->nik . '.' . $foto->getClientOriginalExtension(), File::get($foto));
		// $ktp->foto = 'foto_' . $ktp->nik;

		// $ttd = Request::file('ttd');
		// Storage::disk('local')->put('ttd_' . $ktp->nik . '.' . $ttd->getClientOriginalExtension(), File::get($ttd));
		// $ktp->ttd = 'ttd_' . $ktp->nik;
		return response('success');
	}

	function getAll() {
		$ktp = KTP::all();

		return response($ktp);
	}

	function getView($nik) {
		$ktp = KTP::where('nik', $nik)->first();

		return response($ktp);
	}

	function postUpdate($nik) {
		$input = Input::all();

		// return respone($input);
		$ktp = KTP::where('nik', $nik)->first();
		$ktp->fill($input);

		// if (Request::hasFile('foto')) {
		// 	$foto = Request::file('foto');
		// 	Storage::disk('local')->put('foto_' . $ktp->nik . '.' . $foto->getClientOriginalExtension(), File::get($foto));
		// 	$ktp->foto = 'foto_' . $ktp->nik;
		// }

		// if (Request::hasFile('ttd')) {
		// 	$ttd = Request::file('ttd');
		// 	Storage::disk('local')->put('ttd_' . $ktp->nik . '.' . $ttd->getClientOriginalExtension(), File::get($ttd));
		// 	$ktp->ttd = 'ttd_' . $ktp->nik;
		// }

		$ktp->save();

		return response('success');
	}

	function getDelete($nik) {
		$ktp = KTP::where('nik', $nik)->delete();

		return response('success');
	}

}
