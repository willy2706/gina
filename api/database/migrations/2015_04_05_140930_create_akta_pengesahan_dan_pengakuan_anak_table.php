<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAktaPengesahanDanPengakuanAnakTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('ppl_dukcapil_akta_sah_dan_aku_anak', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('no_akta');
			$table->string('nik');
			//$table->foreign('nik')->references('nik')->on('ppl_dukcapil_ktp');
			$table->string('no_akta_kawin');
			//$table->foreign('no_akta_kawin')->references('no_akta')->on('ppl_dukcapil_akta_kawin');
			$table->string('no_akta_lahir');
			//$table->foreign('no_akta_lahir')->references('no_akta')->on('ppl_dukcapil_akta_lahir');
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
		Schema::drop('ppl_dukcapil_akta_sah_dan_aku_anak');
	}

}
