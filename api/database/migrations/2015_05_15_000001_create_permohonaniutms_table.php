<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePermohonaniutmsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('ppl_iusp_permohonaniutms', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('namaPerusahaan');
			$table->string('alamatPerusahaan');
			$table->string('direkturPerusahaan');
			$table->string('bentukBadanUsaha');
			$table->integer('modalBersih');
			$table->integer('sahamNasional');
			$table->integer('sahamAsing');
			$table->string('suratKepemilikanTempat');
			$table->string('aktaPendirianPerusahaan');
			$table->string('domisili');
			$table->string('amdal');
			$table->string('rencanaMitra');
			$table->timestamp('waktuPengajuan');
			$table->string('status');
            $table->string('tipe');
            $table->string('nomorIzin');
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
		Schema::drop('ppl_iusp_permohonaniutms');
	}

}
