<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\ContentManagementSystem;

class WebController extends Controller
{
    public function showHome()
    {
        $dataCms = ContentManagementSystem::all()->keyBy('judul');

        // return response()->json([
        //     'mainRoleText' => $dataCms['main_role_text']->isi_text ?? '',
        //     'secondRoleText' => $dataCms['second_role_text']->isi_text ?? '',
        //     'aboutText' => $dataCms['about_text']->isi_text ?? '',
        // ]);
        return Inertia::render('Home', [
            'mainRoleText' => $dataCms['main_role_text']->isi_text ?? '',
            'secondRoleText' => $dataCms['second_role_text']->isi_text ?? '',
            'aboutText' => $dataCms['about_text']->isi_text ?? '',
        ]);
    }
}