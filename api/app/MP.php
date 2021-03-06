<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class MP extends Model {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'ppl_dukcapil_mp';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	// protected $fillable = [];

	protected $appends = ['pengikut_mutasi', 'status'];

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	// protected $hidden = ['password', 'remember_token'];

    // public function pengikut_mp() {
    // 	return $this->hasMany('Pengikut_MP');
    // }

	public function pengikut_mp() {
		return $this->hasMany('App\Pengikut_MP', 'no_mp', 'no_mp');
	}

	public function getPengikutMutasiAttribute($value) {
		return $this->pengikut_mp;
	}

    public function getStatusAttribute ($value) {
		$stat = ($this->request ? 'requested' : ($this->message == NULL ? 'approved' :  'rejected'));
		return $stat;
	}

}
