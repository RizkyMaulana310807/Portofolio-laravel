<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('system_log', function (Blueprint $table) {
            $table->id();
            $table->string('ip_address');
            $table->string('url_accessed');
            $table->string('http_method');
            $table->text('user_agent');
            $table->boolean('is_bot');
            $table->enum('severity_level', ['low', 'medium', 'high', 'critical'])->default('low');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('system_log');
    }
};
