<?php

namespace App\Http\Controllers;

use App\Models\ContentManagementSystem;

class WebController extends Controller
{
    public function showHome()
    {
        $dataCms = ContentManagementSystem::all()->keyBy('judul');
        return view('home', compact('dataCms'));

    }
}
