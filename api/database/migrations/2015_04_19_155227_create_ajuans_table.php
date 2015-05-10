<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAjuansTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('ppl_koperasi_ajuans', function(Blueprint $table)
		{
			$table->increments('id');
	        $table->unsignedInteger('id_staff')->nullable();
	        $table->string('nama_koperasi');
	        $table->string('jenis_ajuan');
	        $table->string('jenis_koperasi');
	        $table->string('status');
	        $table->string('id_pengaju');
	        $table->string('email');
	        $table->string('file');
	    });
	    Schema::table('ppl_koperasi_ajuans', function($table)
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
		Schema::drop('ppl_koperasi_ajuans');
	}

}
