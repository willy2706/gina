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
		DB::table('ktp')->delete();
		Model::unguard();
		Ktp::create([
			'nik' => 'a', 
			'password' => 'aaa',
			'nama' => 'abc'
		]);
		Ktp::create([
			'nik' => 'b', 
			'password' => 'bbb',
			'nama' => 'bcd'
		]);
		Ktp::create([
			'nik' => 'admin', 
			'password' => 'admin',
			'nama' => 'admin',
			'is_admin' => true
		]);
	}

}
