<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePengikutMpTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('pengikut_mp', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('no_mp');
			$table->foreign('no_mp')->references('no_mp')->on('mp');
			$table->string('nik_pengikut');
			$table->foreign('nik_pengikut')->references('nik')->on('ktp');
			$table->string('pekerjaan_pengikut');
			$table->string('status_kel_pengikut');
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
		Schema::drop('pengikut_mp');
	}

}
