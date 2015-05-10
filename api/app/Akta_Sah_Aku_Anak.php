<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Akta_Sah_Aku_Anak extends Model {

	protected $table = 'ppl_dukcapil_akta_sah_dan_aku_anak';

	protected $fillable = ['nik', 'no_akta_kawin', 'no_akta_lahir'];

	protected $appends = ['status'];

	public function getStatusAttribute($value) {
		$stat = ($this->request ? 'requested' : ($this->message == NULL ? 'approved' :  'rejected'));

		return $stat;
	}
	
	public function aktalahir() {
		return $this->belongsTo('App\Akta_Lahir', 'no_akta_lahir', 'no_akta');
	}

	public function aktakawin() {
		return $this->belongsTo('App\Akta_Kawin', 'no_akta_kawin', 'no_akta');
	}
}
