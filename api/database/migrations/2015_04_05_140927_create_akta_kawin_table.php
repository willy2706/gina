<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAktaKawinTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('ppl_dukcapil_akta_kawin', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('no_akta');
			$table->index('no_akta');
			$table->string('nik_suami');
			$table->foreign('nik_suami')->references('nik')->on('ppl_dukcapil_ktp');
			$table->string('nik_istri');
			$table->foreign('nik_istri')->references('nik')->on('ppl_dukcapil_ktp');
			$table->date('tanggal_nikah');
			$table->string('tempat_nikah');
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
		Schema::drop('ppl_dukcapil_akta_kawin');
	}

}
