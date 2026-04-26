<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('content_management_system', function (Blueprint $table) {
            $table->id();
            $table->string('judul');
            $table->string('sub_judul');
            $table->text('isi_text');
            $table->enum('status', ['published', 'on hold', 'abort'])->default('published');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('content_management_system');
    }
};
