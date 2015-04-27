<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateKkTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('ppl_dukcapil_kk', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('no_kk');
			$table->index('no_kk');
			$table->string('nik_kepala_kel');
			//$table->foreign('nik_kepala_kel')->references('nik')->on('ktp');
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
		Schema::drop('ppl_dukcapil_kk');
	}

}
