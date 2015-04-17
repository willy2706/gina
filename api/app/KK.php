<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class KK extends Model {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'kk';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	// protected $fillable = [];


	/**
	*
	*
	* The attributes that use to appends
	* @var array
	*/
	protected $appends = ['anggota_keluarga'];

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	// protected $hidden = ['password', 'remember_token'];

	public function anggota_kk() {
		return $this->hasMany('App\Anggota_KK', 'no_kk', 'no_kk');
	}

	public function getAnggotaKeluargaAttribute($value) {
		return $this->anggota_kk;
	}

}
