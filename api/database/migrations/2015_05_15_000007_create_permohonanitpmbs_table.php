<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePermohonanitpmbsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('ppl_iusp_permohonanitpmbs', function(Blueprint $table)
		{
			$table->increments('id');

			$table->string('namaPerusahaan');
			$table->string('alamatPerusahaan');
			$table->string('direkturPerusahaan');
			$table->string('bentukBadanUsaha');

			$table->string('miras_golA');
			$table->string('miras_golB');
			$table->string('miras_golC');

			$table->timestamp('waktuPengajuan');
			$table->string('status');

			$table->string('aktaPendirianPerusahaan');
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
		Schema::drop('ppl_iusp_permohonanitpmbs');
	}

}
