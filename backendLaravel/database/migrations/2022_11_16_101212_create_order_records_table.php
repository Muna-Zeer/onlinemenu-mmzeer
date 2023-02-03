<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::enableForeignKeyConstraints();
        Schema::create('order_records', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('itemID');
            $table->integer('customerID')->unsigned()->index()->nullable();
            $table->time('orderTime');
            $table->integer('employeeNo')->unsigned()->index()->nullable();
            $table->foreign('customerID')->references('id')->on('customers')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('employeeNo')->references('id')->on('employees')->onUpdate('cascade')->onDelete('cascade');
            // $table->foreign(['employeeNo','customerID'])->references(['id','id'])
            // ->on(['employees','customers'])->onDelete(['cascade','cascade']);
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
        Schema::dropIfExists('order_records');
    }
};
