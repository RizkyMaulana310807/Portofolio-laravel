<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function showLogin()
    {
        $ADMIN_DEVICE_TOKEN = '047d98f2-b08c-40f3-8f77-e88088ecdcc7';
        $key = env('ADMIN_DEVICE_TOKEN');
        if ($key == $ADMIN_DEVICE_TOKEN) {
            return view('auth');
        } else {
            return redirect('/')->with('error', 'Hanya admin yang bisa login');
        }
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        // Batasi cuma admin (email lo)
        if ($request->email !== 'rizkymaulana317b@gmail.com') {
            return back()->withErrors([
                'email' => 'Unauthorized',
            ]);
        }

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return redirect('/'); // ke dashboard
        }

        return back()->withErrors([
            'email' => 'Email atau password salah',
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/auth');
    }
}
