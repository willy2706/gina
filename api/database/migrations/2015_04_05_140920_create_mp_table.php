<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMpTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('ppl_dukcapil_mp', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('no_mp');
			$table->index('no_mp');
			$table->string('nik');
			$table->foreign('nik')->references('nik')->on('ppl_dukcapil_ktp');
			$table->string('alamat_tujuan');
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
		Schema::drop('ppl_dukcapil_mp');
	}

}
