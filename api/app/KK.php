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
	protected $fillable = ['no_kk', 'nik_kepala_kel'];

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	// protected $hidden = ['password', 'remember_token'];

    public function anggota_kk() {
    	return $this->hasMany('App\Anggota_KK');
    }

}
