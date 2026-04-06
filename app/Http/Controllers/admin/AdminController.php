<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Logs;

class AdminController extends Controller
{
    public function showDashboard()
    {
        $logs = Logs::all();
        return view('admin.dashboard', compact('logs'));
    }
}
