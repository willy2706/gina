<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableProfit extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('ppl_ukmin_profit', function(Blueprint $table)
		{
			$table->increments('id_transaksi')->unique();
			$table->string('profit', 25);
			$table->date('bulan');
			$table->string('no_registrasi', 20);
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('ppl_ukmin_profit');
	}

}
