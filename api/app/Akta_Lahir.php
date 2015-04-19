<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Akta_Lahir extends Model {

	protected $table = 'akta_lahir';

	protected $fillable = ['nama', 'tempat_lahir', 'tgl_lahir', 'anak_ke', 'jenis_kelamin', 'nik_ayah', 'nik_ibu', 'kewarganegaraan'];

}
