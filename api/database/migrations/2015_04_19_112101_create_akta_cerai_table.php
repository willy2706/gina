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
		Schema::create('akta_cerai', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('no_akta');
			$table->string('akta_kawin');
			$table->foreign('akta_kawin')->references('no_akta')->on('akta_kawin');
			$table->date('tanggal_cerai');
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
		Schema::drop('akta_cerai');
	}

}
