@extends('layouts.app')

@section('title', 'Home Page')

@include('components.navbar')

@section('content')

    @include('partials.home.hero-section')
    @include('partials.home.projects-section')
    @include('partials.home.about-section')
    @include('partials.home.footer-section')

@endsection