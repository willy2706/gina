<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Akta_Cerai extends Model {

	protected $appends = ['status'];

	protected $table = 'ppl_dukcapil_akta_cerai';

	protected $fillable = ['no_akta', 'akta_kawin', 'tanggal_cerai', 'tempat_cerai', 'request', 'message'];
	
	public function getStatusAttribute ($value) {
		$stat = ($this->request ? 'requested' : ($this->message == NULL ? 'approved' :  'rejected'));
		return $stat;
	}
}