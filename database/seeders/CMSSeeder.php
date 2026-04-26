<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ContentManagementSystem;

class CMSSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'judul' => 'about_text',
                'sub_judul' => 'isi text dari about',
                'isi_text' => 'Hai! Saya Rizky,
                                Seorang pengembang yang berfokus pada arsitektur logika, baik untuk web, mobile, maupun
                                game. Dengan pengalaman komersial di Laravel (PHP) dan React Native (EAS Build), saya
                                membangun
                                sistem yang stabil dan efisien. Saya berpengalaman freelance untuk membuat aplikasi
                                berbasis laravel (website) dan aplikasi berbasis react native (mobile) selama kurang
                                lebih 6 bulan.',
                'status' => 'published',
            ],
            [
                'judul' => 'slogan_text',
                'sub_judul' => 'isi text dari slogan di footer',
                'isi_text' => 'Driven by Logic, Powered by Code, and Tuned for Performance (literally 🏍️💨🚀).',
                'status' => 'published',
            ],
            [
                'judul' => 'main_role_text',
                'sub_judul' => 'isi text dari role utama di hero section',
                'isi_text' => 'BACKEND ENGINEERING',
                'status' => 'published',
            ],
            [
                'judul' => 'second_role_text',
                'sub_judul' => 'isi text dari role kedua di hero section',
                'isi_text' => 'TECHNICAL GENERALIST',
                'status' => 'published',
            ],
            [
                'judul' => 'first_tag',
                'sub_judul' => 'isi text dari tag pertama',
                'isi_text' => 'Laravel',
                'status' => 'published',
            ],
            [
                'judul' => 'second_tag',
                'sub_judul' => 'isi text dari tag kedua',
                'isi_text' => 'Coding Holic',
                'status' => 'published',
            ],
            [
                'judul' => 'third_tag',
                'sub_judul' => 'isi text dari tag ketiga',
                'isi_text' => 'Backend Developer',
                'status' => 'published',
            ],

        ];

        foreach ($data as $item) {
            ContentManagementSystem::firstOrCreate(
                $item
            );
        }

    }
}
