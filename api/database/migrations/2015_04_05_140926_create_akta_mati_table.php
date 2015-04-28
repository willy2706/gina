<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAktaMatiTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('ppl_dukcapil_akta_mati', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('no_akta');
			$table->index('no_akta');
			$table->string('nik');
			$table->foreign('nik')->references('nik')->on('ppl_dukcapil_ktp');
			$table->string('kota_meninggal');
			$table->dateTime('waktu_meninggal');
			$table->string('kota_dikeluarkan');
			$table->date('tgl_dikeluarkan');
			$table->string('nip_kepala_dinas');
			$table->boolean('request');
			$table->string('message')->nullable();
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
		Schema::drop('ppl_dukcapil_akta_mati');
	}

}
