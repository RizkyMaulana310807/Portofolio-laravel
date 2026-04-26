<?php

namespace Database\Seeders;

use App\Models\User;
use Database\Seeders\AdminSeeder;
use Database\Seeders\CMSSeeder;
use Database\Seeders\LogsSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call(AdminSeeder::class);
        $this->call(CMSSeeder::class);
        $this->call(LogsSeeder::class);

        // // optional
        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        //     'role' => 'user'
        // ]);
    }
}
