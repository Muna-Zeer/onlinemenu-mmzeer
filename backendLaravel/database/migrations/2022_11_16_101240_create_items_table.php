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
        Schema::create('items', function (Blueprint $table) {
            $table->increments('id');
            $table->string('ItemName') ->nullable();;
            $table->string('size') ->nullable();;
            $table->string('crust') ->nullable();;
            $table->integer('newPrice') ->nullable();;
            $table->integer('oldPrice') ->nullable();;
            $table->integer('Qty') ->nullable();;
            $table->string('ItemImg') ->nullable();;
            $table->string('Description') ->nullable();;
            $table->integer('menuID')->unsigned()->index()->nullable();
            $table->foreign('menuID')->references('id')->on('menu_types')->onDelete('cascade');

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
        Schema::dropIfExists('items');
    }
};
