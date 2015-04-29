<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePertanyaansTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('ppl_koperasi_pertanyaans', function(Blueprint $table)
		{
			$table->increments('id');
	        $table->unsignedInteger('id_staff')->nullable();
	        $table->text('pertanyaan_user');
	        $table->text('jawaban')->nullable();
	        $table->string('nama');
	        $table->string('email');
	    });
	    Schema::table('ppl_koperasi_pertanyaans', function($table)
	    {
	    	$table->foreign('id_staff')
				->references('id')->on('ppl_dukcapil_ktp');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('ppl_koperasi_pertanyaans');
	}

}
