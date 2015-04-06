<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Ktp;
class KtpTableSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Model::unguard();
		Ktp::create([
			'nik' => 'a', 
			'password' => 'aaa',
		]);
	}

}
