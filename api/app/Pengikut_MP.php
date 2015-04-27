<?php namespace App;

use Illuminate\Database\Eloquent\Model;

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

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	// protected $hidden = ['password', 'remember_token'];

	public function mp() {
		return $this->belongsTo('MP');
	}

}
