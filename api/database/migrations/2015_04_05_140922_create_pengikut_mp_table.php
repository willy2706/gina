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
		Schema::create('ppl_dukcapil_pengikut_mp', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('no_mp');
			$table->foreign('no_mp')->references('no_mp')->on('ppl_dukcapil_mp');
			$table->string('nik_pengikut');
			$table->foreign('nik_pengikut')->references('nik')->on('ppl_dukcapil_ktp');
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
		Schema::drop('ppl_dukcapil_pengikut_mp');
	}

}
