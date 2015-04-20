<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Akta_Lahir extends Model {
	
	protected $appends = ['anggota_keluarga', 'status'];

	protected $table = 'akta_lahir';

	protected $fillable = ['nama', 'tempat_lahir', 'tgl_lahir', 'anak_ke', 'jenis_kelamin', 'nik_ayah', 'nik_ibu', 'kewarganegaraan'];
	
	public function getStatusAttribute ($value) {
		$stat = ($this->request ? 'requested' : ($this->message == NULL ? 'approved' :  'rejected'));
		return $stat;
	}
}
