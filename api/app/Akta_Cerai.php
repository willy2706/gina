<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Akta_Cerai extends Model {

	protected $appends = ['anggota_keluarga', 'status'];

	protected $table = 'akta_cerai';

	protected $fillable = ['no_akta', 'akta_kawin', 'tanggal_cerai', 'request', 'message'];
	
	public function getStatusAttribute ($value) {
		$stat = ($this->request ? 'requested' : ($this->message == NULL ? 'approved' :  'rejected'));
		return $stat;
	}
}