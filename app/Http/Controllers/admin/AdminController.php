<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function showDashboard()
    {
        $logs = [
            [
                'id' => 1,
                'ip' => '12.12.12.12',
                'url' => '/Admin',
                'method' => 'POST',
                'agent' => 'Chrome',
                'is_bot' => false,
                'severity' => 'CRITICAL',
                'timestamp' => '12-12-2027:59:59:12'
            ],
        ];

        return view('admin.dashboard', compact('logs'));
    }
}
