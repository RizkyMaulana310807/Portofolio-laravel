<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;

Route::get('/test-email', function() {
    Mail::raw("ini email test dari Laravel", function ($mesasage){
        $mesasage->to('rizkymaulana317b@gmail.com')->subject('test email');
    });
    return 'email di kirim cek inbox lo';
});

Route::get('/', function () {
    return view('home');
});
