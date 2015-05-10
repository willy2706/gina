<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Akta_Mati extends Model {

	protected $table = 'ppl_dukcapil_akta_mati';

	protected $fillable = ['nik', 'kota_meninggal', 'waktu_meninggal', 'nik_request'];

	protected $appends = ['status'];

	public function getStatusAttribute($value) {
		$stat = ($this->request ? 'requested' : ($this->message == NULL ? 'approved' :  'rejected'));

		return $stat;
	}
	
}
