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
        Schema::create('tables', function (Blueprint $table) {
            $table->increments('id') ->nullable();
            $table->string('Hour') ->nullable();
            $table->dateTime('date')->nullable($value = true);
            $table->integer('numPeople') ->nullable();
            $table->bigInteger('phone') ->nullable();
            $table->String('email') ->nullable();
            $table->String('name') ->nullable();
            $table->String('comments') ->nullable();
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
        Schema::dropIfExists('tables');
    }
};
