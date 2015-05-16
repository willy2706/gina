<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePermohonanstpwsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('ppl_iusp_permohonanstpws', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('namaPerusahaan');
			$table->string('alamatPerusahaan');
			$table->string('direkturPerusahaan');
			$table->string('bentukBadanUsaha');

			$table->string('bantuan');
			$table->string('fasilitas');
			$table->string('bimbingan');
			$table->string('pelatihan');
			$table->string('tatacaraPembayaran');
			$table->string('penyelesaianSengketa');
			$table->string('perpanjanganPerjanjian');
			$table->string('pengakhiranPerjanjian');
			$table->string('pemutusanPerjanjian');
			$table->string('jaminan');
			$table->string('hakPemberi');
			$table->string('kewajibanPemberi');
			$table->string('hakPenerima');
			$table->string('kewajibanPenerima');
			$table->string('wilayahUsaha');
			$table->string('jangkaWaktu');
			$table->string('jumlahTempatUsaha');

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
		Schema::drop('ppl_iusp_permohonanstpws');
	}

}
