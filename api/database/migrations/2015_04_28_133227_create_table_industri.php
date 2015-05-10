<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableIndustri extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('ppl_ukmin_industri', function(Blueprint $table)
		{
			$table->increments('id_industri')->unique();
			$table->string('username', 20);
			$table->string('password', 20);
			$table->string('no_registrasi', 20);
			$table->string('nama_perusahaan');
			$table->longText('produk');
			$table->string('pemilik', 50);
			$table->string('alamat', 50);
			$table->longText('deskripsi');
			$table->string('kontak', 100);
			$table->float('rating');
			$table->integer('jumlah_pembeli_rating');
			$table->index('no_registrasi');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('ppl_ukmin_industri');
	}

}
