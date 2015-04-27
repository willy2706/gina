<?php namespace App\Http\Controllers;

use App\KTP;
use Input;
use Request;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class AdminKTPController extends Controller {

	function postCreate() {
		$input = Input::all();
		return response($input);

		$ktp = new KTP();
		$ktp->nik = $this->getTimestamp();
		$ktp->password = $input['password'];
		$ktp->nama = $input['nama'];
		$ktp->kota_lahir = $input['kota_lahir'];
		$ktp->tanggal_lahir = $input['tanggal_lahir'];
		$ktp->jenis_kelamin = $input['jenis_kelamin'];
		$ktp->gol_darah = $input['gol_darah'];
		$ktp->alamat = $input['alamat'];
		$ktp->rt = $input['rt'];
		$ktp->rw = $input['rw'];
		$ktp->kel_desa = $input['kel_desa'];
		$ktp->kec = $input['kec'];
		$ktp->kota_kab = $input['kota_kab'];
		$ktp->kode_pos = $input['kode_pos'];
		$ktp->agama = $input['agama'];
		$ktp->status = $input['status'];
		$ktp->kewarganegaraan = $input['kewarganegaraan'];
		$ktp->tgl_kadaluarsa = $input['tgl_kadaluarsa'];
		$ktp->kota_dikeluarkan = $input['kota_dikeluarkan'];
		$ktp->prov_dikeluarkan = $input['prov_dikeluarkan'];
		$ktp->tgl_dikeluarkan = $input['tgl_dikeluarkan'];

		$foto = Request::file('foto');
		Storage::disk('local')->put('foto_' . $ktp->nik . '.' . $foto->getClientOriginalExtension(), File::get($foto));
		$ktp->foto = 'foto_' . $ktp->nik;

		$ttd = Request::file('ttd');
		Storage::disk('local')->put('ttd_' . $ktp->nik . '.' . $ttd->getClientOriginalExtension(), File::get($ttd));
		$ktp->ttd = 'ttd_' . $ktp->nik;

		$ktp->save();

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

	function postUpdate() {
		$input = Input::all();

		// return respone($input);
		$ktp = new KTP();
		$ktp = KTP::where('nik', $input['nik'])->first();
		$ktp->password = $input['password'];
		$ktp->nama = $input['nama'];
		$ktp->kota_lahir = $input['kota_lahir'];
		$ktp->tanggal_lahir = $input['tanggal_lahir'];
		$ktp->jenis_kelamin = $input['jenis_kelamin'];
		$ktp->gol_darah = $input['gol_darah'];
		$ktp->alamat = $input['alamat'];
		$ktp->rt = $input['rt'];
		$ktp->rw = $input['rw'];
		$ktp->kel_desa = $input['kel_desa'];
		$ktp->kec = $input['kec'];
		$ktp->kota_kab = $input['kota_kab'];
		$ktp->kode_pos = $input['kode_pos'];
		$ktp->agama = $input['agama'];
		$ktp->status = $input['status'];
		$ktp->kewarganegaraan = $input['kewarganegaraan'];
		$ktp->tgl_kadaluarsa = $input['tgl_kadaluarsa'];
		$ktp->kota_dikeluarkan = $input['kota_dikeluarkan'];
		$ktp->prov_dikeluarkan = $input['prov_dikeluarkan'];
		$ktp->tgl_dikeluarkan = $input['tgl_dikeluarkan'];

		if (Request::hasFile('foto')) {
			$foto = Request::file('foto');
			Storage::disk('local')->put('foto_' . $ktp->nik . '.' . $foto->getClientOriginalExtension(), File::get($foto));
			$ktp->foto = 'foto_' . $ktp->nik;
		}

		if (Request::hasFile('ttd')) {
			$ttd = Request::file('ttd');
			Storage::disk('local')->put('ttd_' . $ktp->nik . '.' . $ttd->getClientOriginalExtension(), File::get($ttd));
			$ktp->ttd = 'ttd_' . $ktp->nik;
		}

		$ktp->save();

		return response('success');
	}

	function getDelete($nik) {
		$ktp = KTP::where('nik', $nik)->delete();

		return response('success');
	}

}
