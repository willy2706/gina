<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAktaCeraiTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('ppl_dukcapil_akta_cerai', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('no_akta');
			$table->string('akta_kawin');
			//$table->foreign('akta_kawin')->references('no_akta')->on('akta_kawin');
			$table->date('tanggal_cerai');
			$table->string('tempat_cerai');
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
		Schema::drop('ppl_dukcapil_akta_cerai');
	}

}
