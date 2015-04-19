<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Akta_Mati extends Model {

	protected $appends = ['anggota_keluarga', 'status'];
	
	protected $table = 'akta_mati';

	protected $fillable = ['nik', 'kota_meninggal', 'waktu_meninggal'];
	
	public function getStatusAttribute ($value) {
		$stat = ($this->request ? 'requested' : ($this->message == NULL ? 'approved' :  'rejected'));
		return $stat;
	}
}
