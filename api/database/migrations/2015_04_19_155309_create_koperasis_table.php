<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateKoperasisTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('ppl_koperasi_koperasis', function(Blueprint $table)
		{
			$table->increments('id');
	        $table->string('nama')->unique;
	        $table->string('jenis_koperasi');
	        $table->timestamp('tgl_pembuatan')->default(DB::raw('CURRENT_TIMESTAMP'));
	        $table->string('id_pendiri');
	        $table->string('alamat');
	        $table->text('deskripsi');
	        $table->string('no_telepon');
	        $table->string('penilaian');
	    });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('ppl_koperasi_koperasis');
	}

}
