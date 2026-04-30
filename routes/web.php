<?php

use App\Http\Controllers\admin\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\WebController;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

// route login
Route::get('/login', [AuthController::class, 'showLogin']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);

// route tes kirim email
Route::get('/test-email', function () {
    Mail::raw('ini email test dari Laravel', function ($mesasage) {
        $mesasage->to('rizkymaulana317b@gmail.com')->subject('test email');
    });

    return 'email di kirim cek inbox lo';
});

Route::get('/', [WebController::class, 'showHome'])->name('home');

// route dashboard admin only
Route::redirect('dashboard', 'dashboard/main');

Route::get('dashboard/main', [AdminController::class, 'showDashboard'])->name('dashboard.main');
Route::get('dashboard/content-management-system', [AdminController::class, 'showContentManagementSystem'])->name('dashboard.contentmanagementsystem');
Route::get('dashboard/resourcemanagement', [AdminController::class, 'showReseourceManagement'])->name('dashboard.resourcemanagement');

// route CRUD
// CRUD CMS
Route::put('dashboard/cms/save/{id}', [AdminController::class, 'update'])->name('cms.update');

Route::post('/send', function (Request $request) {

    $message = $request->input('message');

    event(new MessageSent($message));

    return response()->json(['status' => 'ok']);
});

Route::get('/chat', function () {
    return view('chat');
});
