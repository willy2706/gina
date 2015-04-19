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
		Schema::create('akta_lahir', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('nik');
			$table->string('nama');
			$table->string('kewarganegaraan');
			$table->string('tempat_lahir');
			$table->date('tgl_lahir');
			$table->integer('anak_ke');
			$table->string('jenis_kelamin');
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
		Schema::drop('akta_lahir');
	}

}
