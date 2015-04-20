<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Akta_Kawin extends Model {

	protected $appends = ['anggota_keluarga', 'status'];

	protected $table = 'akta_kawin';

	protected $fillable = ['no_akta', 'nik_suami', 'nik_istri', 'tanggal_nikah', 'tempat_nikah', 'request', 'message'];
	
	public function getStatusAttribute ($value) {
		$stat = ($this->request ? 'requested' : ($this->message == NULL ? 'approved' :  'rejected'));
		return $stat;
	}
}