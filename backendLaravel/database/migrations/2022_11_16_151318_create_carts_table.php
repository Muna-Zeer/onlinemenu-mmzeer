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
        Schema::create('carts', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('customerID')->unsigned()->index()->nullable();
            $table->integer('itemID')->unsigned()->index()->nullable();
            $table->integer('total-price');
            $table->foreign('itemID')->references('id')->on('items')->onDelete('cascade');
            
            $table->foreign('customerID')->references('id')->on('customers')->onDelete('cascade');
         
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
        Schema::dropIfExists('carts');
    }
};
