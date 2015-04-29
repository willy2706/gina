<?php namespace App;

use Illuminate\Database\Eloquent\Model;
use App\MP;
class Pengikut_MP extends Model {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'ppl_dukcapil_pengikut_mp';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	// protected $fillable = [];

	protected $appends = ['nama'];

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	// protected $hidden = ['password', 'remember_token'];

	public function mp() {
		return $this->belongsTo('App\MP', 'no_mp', 'no_mp');
	}

	public function ktp() {
		return $this->belongsTo('App\Ktp', 'nik_pengikut', 'nik');
	}

	public function getNamaAttribute($value) {
		$x = $this->ktp->nama;
		return $x;
	}

}
