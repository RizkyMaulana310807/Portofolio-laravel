@extends('layouts.dashboard')

@section('title', 'Dashboard')

@if (session('success'))
    <x-alert type="success">
        {{ session('success') }}
    </x-alert>
@endif


@section('content')
    @if ($page == 'main')
        @include('partials.dashboard.analytics-overview')
    @elseif ($page == 'cms')
        @include('partials.dashboard.content-management-system')
    @elseif ($page == 'resource')
        @include('partials.dashboard.resource-manager')
    @endif
@endsection
