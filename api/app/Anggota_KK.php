<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Anggota_KK extends Model {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'anggota_kk';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	// protected $fillable = [];

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	// protected $hidden = ['password', 'remember_token'];

	public function kk() {
		return $this->belongsTo('KK');
	}

}
