<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddIsAdminKtpTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('ktp', function($table){
			// $allow = array('Male', 'Female');
			$table->boolean('is_admin')->after('tgl_dikeluarkan');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('ktp', function($table) {
			$table->dropColumn('is_admin');
		});
	}

}
