@extends('layouts.app')
@section('title', 'auth')
@section('content')

<div class="flex w-screen h-screen justify-center items-center">
    <div class="flex bg-darker w-2/5 h-2/3 p-8 gap-8 flex-col rounded-2xl">

        {{-- Header --}}
        <div class="flex justify-center items-center flex-col gap-6">
            <img class="w-18 h-18 rounded-xl border-4 border-bright hover:border-accent cursor-pointer transition-all duration-200"
                src="https://i.pinimg.com/736x/8d/6c/22/8d6c229e6d9f3cf2b9fa209b08625266.jpg" alt="logo">
            <h1 class="font-quicksand text-2xl font-bold text-main">Welcome back Users!</h1>
        </div>

        {{-- FORM START --}}
        <form method="POST" action="/login" class="flex flex-col gap-6 w-full">
            @csrf

            {{-- Email --}}
            <div class="bg-bright border border-main rounded-xl relative flex items-center w-full">
                <i class="fas fa-envelope absolute left-3 text-xl text-main"></i>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="your_email@gmail.com"
                    class="py-3 pl-10 pr-3 w-full rounded-xl placeholder:text-main font-quicksand text-sm outline-none"
                    required
                >
            </div>

            {{-- Password --}}
            <div class="bg-bright border border-main rounded-xl relative flex items-center w-full">
                <i class="fas fa-lock absolute left-3 text-xl text-main"></i>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="your_password"
                    class="py-3 pl-10 pr-3 w-full rounded-xl placeholder:text-main font-quicksand text-sm outline-none"
                    required
                >
            </div>

            {{-- Button --}}
            <div class="w-full">
                <button 
                    type="submit"
                    class="bg-accent text-bright w-full py-2 rounded-xl font-bold font-quicksand text-xl border-b-4 border-r-4 border-accent-shade cursor-pointer hover:bg-bright hover:text-accent hover:border-accent transition-all duration-200"
                >
                    Login
                </button>
            </div>

        </form>
        {{-- FORM END --}}

        {{-- Footer --}}
        <div class="flex w-full flex-row justify-evenly items-center">
            <div class="w-1/4 border border-main h-0"></div>
            <p class="text-xs text-gray font-quicksand">
                Don't have an account yet? 
                <a href="#" class="underline">Sign Up</a>
            </p>
            <div class="w-1/4 border border-main h-0"></div>
        </div>

    </div>
</div>

@endsection
