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
			$table->foreign('nik')->references('nik')->on('ktp');
			$table->string('pendidikan');
			$table->string('status_hub');
			$table->string('nik_ayah');
			$table->foreign('nik_ayah')->references('nik')->on('ktp');
			$table->string('nik_ibu');
			$table->foreign('nik_ibu')->references('nik')->on('ktp');
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
