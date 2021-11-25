<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAlbumsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('albums', function (Blueprint $table) {
            $table->id("id");
            $table->string("title", 256);
            $table->longText("album_desc");
            $table->string("image", 256);
            $table->dateTime("date_created");
            $table->boolean("featured");
            $table->bigInteger("artist_id")->unsigned();
            $table->foreign("artist_id")->references("id")->on("artists");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('albums');
    }
}
