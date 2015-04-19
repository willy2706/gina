<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Akta_Kawin extends Model {

	protected $table = 'akta_kawin';

	protected $fillable = ['no_akta', 'nik_suami', 'nik_istri', 'tanggal_nikah', 'tempat_nikah'];

}