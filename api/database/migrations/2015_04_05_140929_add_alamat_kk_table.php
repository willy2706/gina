<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddAlamatKkTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('ppl_dukcapil_kk', function(Blueprint $table) {
			$table->string('alamat')->after('nik_kepala_kel');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('ppl_dukcapil_kk', function(Blueprint $table) {
			$table->dropColumn('alamat');
		});
	}

}
