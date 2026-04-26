@extends('layouts.dashboard')

@section('title', 'Dashboard')

@if (isset($success))
    <x-alert type="success">
        {{ $success }}
    </x-alert>
@endif


@section('content')
    {{-- @include('partials.dashboard.analytics-overview') --}}
    {{-- @include('partials.dashboard.content-management-system') --}}
    @include('partials.dashboard.resource-manager')
@endsection
