<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\admin\AdminController;

// route login
Route::get('/login', [AuthController::class, 'showLogin']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);

// route tes kirim email
Route::get('/test-email', function () {
    Mail::raw("ini email test dari Laravel", function ($mesasage) {
        $mesasage->to('rizkymaulana317b@gmail.com')->subject('test email');
    });
    return 'email di kirim cek inbox lo';
});

Route::get('/', function () {
    return view('home');
});

// route dashboard admin only
Route::get('/dashboard', [AdminController::class, 'showDashboard']);