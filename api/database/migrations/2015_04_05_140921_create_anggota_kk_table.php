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
		Schema::create('ppl_dukcapil_anggota_kk', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('no_kk');
			$table->foreign('no_kk')->references('no_kk')->on('ppl_dukcapil_kk');
			$table->string('nik');
			$table->foreign('nik')->references('nik')->on('ppl_dukcapil_ktp');
			$table->string('pendidikan');
			$table->string('status_hub');
			$table->string('nik_ayah');
			$table->foreign('nik_ayah')->references('nik')->on('ppl_dukcapil_ktp');
			$table->string('nik_ibu');
			$table->foreign('nik_ibu')->references('nik')->on('ppl_dukcapil_ktp');
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
		Schema::drop('ppl_dukcapil_anggota_kk');
	}

}
