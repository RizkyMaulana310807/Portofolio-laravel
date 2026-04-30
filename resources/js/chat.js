import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

// init echo
const echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    forceTLS: true
});

// listen event
echo.channel('chat')
    .listen('.MessageSent', (e) => {
        const chat = document.getElementById('chat');

        if (!chat) return;

        const div = document.createElement('div');
        div.className = "mb-2 p-2 bg-gray-200 rounded";
        div.innerText = e.message;

        chat.appendChild(div);
    });

// kirim message
window.sendMessage = function () {
    const input = document.getElementById('message');
    if (!input) return;

    const message = input.value;

    if (!message) return;

    fetch('/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
        },
        body: JSON.stringify({ message })
    });

    input.value = '';
};
