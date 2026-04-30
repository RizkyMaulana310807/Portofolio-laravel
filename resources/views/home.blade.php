@extends('layouts.app')

@section('title', 'Home Page')

@include('components.navbar')

@section('content')

    @if (session('error'))
        <x-alert type="error">
            {{ session('error') }}
        </x-alert>
    @endif
    
    @include('partials.home.hero-section')
    @include('partials.home.projects-section')
    @include('partials.home.about-section')
    @include('partials.home.footer-section')

@endsection
