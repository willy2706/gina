<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableVerifikasi extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('ppl_ukmin_verifikasi', function(Blueprint $table)
		{
			$table->increments('id_verifikasi')->unique();
			$table->string('no_registrasi', 20);
			$table->string('username_dinas', 20);
			$table->string('status', 20);
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('ppl_ukmin_verifikasi');
	}

}
