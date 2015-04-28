<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddNikRequestAktaMatiTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('ppl_dukcapil_akta_mati', function(Blueprint $table) {
			$table->string("nik_request")->after("message");
			$table->foreign('nik_request')->references('nik')->on('ppl_dukcapil_ktp');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table("ppl_dukcapil_akta_mati", function($table) {
			$table->dropForeign('ppl_dukcapil_akta_mati_nik_request_foreign');
			$table->dropColumn('nik_request');
		});
	}

}
