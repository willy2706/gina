<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAnggotaKkTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('anggota_kk', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('no_kk');
			$table->foreign('no_kk')->references('no_kk')->on('kk');
			$table->string('nik');
			$table->string('pendidikan');
			$table->string('status_hub');
			$table->string('nik_ayah');
			$table->string('nik_ibu');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('anggota_kk');
	}

}
