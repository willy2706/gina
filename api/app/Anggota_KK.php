<?php namespace App;

use Illuminate\Database\Eloquent\Model;
use App\KK;
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
	*
	*
	* The attributes that use to appends
	* @var array
	*/
	protected $appends = ['nama'];
	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	// protected $hidden = ['password', 'remember_token'];

	public function kk() {
		return $this->belongsTo('App\KK', 'no_kk', 'no_kk');
	}

	public function ktp() {
		return $this->belongsTo('App\Ktp', 'nik', 'nik');
	}

	public function getNamaAttribute($value) {
		$x = $this->ktp->nama;
		return $x;
	}

}
