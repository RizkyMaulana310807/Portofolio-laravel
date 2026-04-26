<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Logs;
use App\Models\ContentManagementSystem;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    // only granted device can enter the dashboard
    public function showDashboard()
    {
        // static device token
        $ADMIN_DEVICE_TOKEN = '047d98f2-b08c-40f3-8f77-e88088ecdcc7';

        // check the env if the device token same as the static one
        $key = env('ADMIN_DEVICE_TOKEN');

        // if the token is same then show the dashboard
        if ($key == $ADMIN_DEVICE_TOKEN) {
            $logs = Logs::all();
            $user = Auth::user();

            return view('admin.dashboard', [
                'logs' => $logs,
                'user' => $user,
                'page' => 'main',
            ]);
        } else {
            // other else redirect with error
            return redirect('/')->with('error', 'Unauthorize');
        }
    }

    public function showMain()
    {
        return view('admin.dashboard', ['page' => 'main']);
    }

    public function showContentManagementSystem()
    {
        $cmsData = ContentManagementSystem::all();
        return view('admin.dashboard', ['page' => 'cms', 'cmsData' => $cmsData]);
    }

    public function showReseourceManagement()
    {
        return view('admin.dashboard', ['page' => 'resource']);
    }
}
