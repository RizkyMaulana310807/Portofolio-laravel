<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Dashboard')</title>

    @vite(['resources/css/app.css', 'resources/js/dashboard.js'])

    <style>
        @font-face {
            font-family: "Fredoka";
            src: url("{{ asset('fonts/Fredoka/FredokaVariable.ttf') }}") format("truetype");
        }

        @font-face {
            font-family: "Quicksand";
            src: url("{{ asset('fonts/Quicksand/QuicksandVariable.ttf') }}") format("truetype");
        }
    </style>
</head>

<body class="bg-primary text-main">

    <!-- SIDEBAR -->
    <aside class="fixed top-0 left-0 w-64 h-screen bg-secondary text-main z-50 border-r border-main">
        <div class="p-4 border-b border-main font-bold">
            DASHBOARD
        </div>

        <nav class="p-4 space-y-2">
            <a href="#" class="block px-3 py-2 rounded hover:bg-primary">
                Dashboard
            </a>
            <a href="#" class="block px-3 py-2 rounded hover:bg-primary">
                CMS
            </a>
            <a href="#" class="block px-3 py-2 rounded hover:bg-primary">
                Resource
            </a>

        </nav>
        
    </aside>

    <!-- HEADER -->
    <header class="fixed top-0 left-64 right-0 h-[57px] bg-secondary border-b border-main flex items-center px-6 z-40">
        <h1 class="font-bold text-main">@yield('header', '[SYSTEM PANIC]')</h1>
    </header>

    <!-- CONTENT -->
    <main class="ml-64 mt-16 h-[calc(100vh-4rem)] overflow-y-auto p-6">

        @yield('content')

    </main>

</body>

</html>