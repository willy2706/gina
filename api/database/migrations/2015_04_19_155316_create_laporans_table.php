<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLaporansTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('ppl_koperasi_laporans', function(Blueprint $table)
		{
			$table->increments('id');
	        $table->unsignedInteger('id_koperasi');
	        $table->string('id_pengirim');
	        $table->timestamp('tgl_kirim')->default(DB::raw('CURRENT_TIMESTAMP'));
	        $table->string('file');
	        $table->unsignedInteger('tahun');
	        $table->unsignedInteger('permodalan');
	        $table->unsignedInteger('kualitas_aktiva_produktif');
	        $table->unsignedInteger('manajemen');
	        $table->unsignedInteger('efisiensi');
	        $table->unsignedInteger('likuiditas');
	        $table->unsignedInteger('kemandirian_dan_pertumbuhan');
	        $table->unsignedInteger('jatidiri_koperasi');
	        $table->unsignedInteger('terverifikasi');
	    });
	    
	    Schema::table('ppl_koperasi_laporans', function($table)
	    {
	    	$table->foreign('id_koperasi')
				->references('id')->on('ppl_koperasi_koperasis');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('ppl_koperasi_laporans');
	}

}
