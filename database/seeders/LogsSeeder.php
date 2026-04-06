<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Logs;
class LogsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Logs::firstOrCreate([
            'ip_address' => '12.12.12.12',
            'url_accessed' => '/admin/dashboard',
            'http_method' => 'POST',
            'user_agent' => 'Chrome',
            'is_bot' => false,
            'severity_level' => 'low'
        ]);
    }
}
