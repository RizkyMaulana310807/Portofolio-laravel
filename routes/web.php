<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\AuthController;


Route::get('/login', [AuthController::class, 'showLogin']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);


Route::get('/test-email', function () {
    Mail::raw("ini email test dari Laravel", function ($mesasage) {
        $mesasage->to('rizkymaulana317b@gmail.com')->subject('test email');
    });
    return 'email di kirim cek inbox lo';
});

Route::get('/', function () {
    return view('home');
});

Route::get('/auth', function () {
    return view('auth');
});

