<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Akta_Mati extends Model {

	protected $table = 'akta_mati';

	protected $fillable = ['nik', 'kota_meninggal', 'waktu_meninggal'];

}
