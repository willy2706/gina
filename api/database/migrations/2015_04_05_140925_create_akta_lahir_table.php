<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAktaLahirTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('ppl_dukcapil_akta_lahir', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('no_akta');
			$table->index('no_akta');
			$table->string('nik');
			$table->string('nama');
			$table->string('tempat_lahir');
			$table->date('tgl_lahir');
			$table->integer('anak_ke');
			$table->string('jenis_kelamin');
			$table->string('nik_ayah');
			// $table->foreign('nik_ayah')->references('nik')->on('ktp');
			$table->string('nik_ibu');
			// $table->foreign('nik_ibu')->references('nik')->on('ktp');
			$table->string('kewarganegaraan');
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
		Schema::drop('ppl_dukcapil_akta_lahir');
	}

}
