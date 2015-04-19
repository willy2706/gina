<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Akta_Cerai extends Model {

	protected $table = 'akta_cerai';

	protected $fillable = ['no_akta', 'akta_kawin', 'tanggal_cerai'];

}