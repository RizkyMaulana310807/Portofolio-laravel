@extends('layouts.dashboard')

@section('title', "Dashboard")

@section('content')
    {{-- @include('partials.dashboard.analytics-overview') --}}
    @include('partials.dashboard.content-management-system')
@endsection