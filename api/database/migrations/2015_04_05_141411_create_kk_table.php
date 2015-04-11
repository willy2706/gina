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
		Schema::create('kk', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('no_kk');
			$table->index('no_kk');
			$table->string('nik_kepala_kel');
			$table->boolean('request');
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
		Schema::drop('kk');
	}

}
