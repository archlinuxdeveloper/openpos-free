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
    Schema::create('stocks', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('article_id')->nullable();
      $table->bigInteger('stock')->unsigned();

      $table->foreign('article_id')
        ->references('id')
        ->on('articles')
        ->onUpdate('cascade')
        ->onDelete('set null');
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
    Schema::dropIfExists('stocks');
  }
};
