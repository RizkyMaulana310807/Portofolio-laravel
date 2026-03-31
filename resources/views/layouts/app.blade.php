<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title', 'Rizky Maulana')</title>
    <style>
        .card {
            opacity: 0;
            transform: translateY(50px);
        }

        @font-face {
            font-family: "Fredoka";
            src: url("{{ asset('fonts/Fredoka/FredokaVariable.ttf') }}") format("truetype");
        }

        @font-face {
            font-family: "Quicksand";
            src: url("{{ asset('fonts/Quicksand/QuicksandVariable.ttf') }}") format("truetype");
        }

        #track::-webkit-scrollbar {
            display: none;
            /* Sembunyikan scrollbar di Chrome/Safari */
        }

        /* Pastikan setiap card tidak shrink */
        #track>* {
            flex-shrink: 0;
        }
    </style>

    </@font-face>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="bg-primary min-h-screen flex flex-col overflow-x-hidden">

    <div class="container">
        @yield('content')
    </div>

</body>

</html>