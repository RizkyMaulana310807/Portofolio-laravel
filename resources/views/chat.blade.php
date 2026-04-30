<!DOCTYPE html>
<html>

<head>
    <title>Chat Test</title>

    <meta name="csrf-token" content="{{ csrf_token() }}">

    @vite('resources/js/chat.js')
</head>

<body class="p-6">

    <div id="chat" class="border p-4 h-64 overflow-y-auto mb-4"></div>

    <input id="message" type="text" class="border p-2 w-full mb-2" placeholder="ketik...">
    <button onclick="sendMessage()" class="bg-blue-500 text-white px-4 py-2">
        Kirim
    </button>

</body>

</html>