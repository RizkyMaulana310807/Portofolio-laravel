@section('header', 'Content Management System')
<div class=" flex w-full h-full flex-col">
    <div>
        <h1 class="text-2xl font-fredoka font-bold">
            Content Management System {CMS}
        </h1>
    </div>

    {{-- search box --}}
    <div class="bg-secondary flex w-full h-24 justify-center">
        <div class="flex flex-row items-center gap-6 px-8">
            <input class="bg-white px-6 py-3 rounded-full placeholder:font-quicksand" type="text"
                placeholder="Search by text ...">
            <div class=" aspect-square w-14 flex items-center justify-center rounded-full cursor-pointer">
                <i data-lucide="search" class=""></i>
            </div>
        </div>
    </div>
    {{-- content --}}
    <div class="grid grid-cols-3 w-full h-full items-start p-4 gap-4">
        @foreach ($cmsData as $item)
        <x-cms-card :title="$item->judul" :subtitle="$item->sub_judul" :content="$item->isi_text"
            :status="$item->status" :updatedAt="$item->updated_at->diffForHumans()" />
        @endforeach
    </div>
</div>

{{-- script untuk textarea --}}
<script>
    const textareas = document.querySelectorAll('.auto-textarea');

    // Fungsi untuk mengatur tinggi
    function adjustHeight(el) {
        el.style.height = 'auto';
        el.style.height = el.scrollHeight + 'px';
    }

    textareas.forEach(textarea => {
        // 1. Jalankan saat ada input (ketika user mengetik)
        textarea.addEventListener('input', function () {
            adjustHeight(this);
        });

        // 2. Jalankan saat halaman pertama kali dimuat
        // Menggunakan setTimeout agar browser sempat menghitung scrollHeight dengan benar
        setTimeout(() => {
            adjustHeight(textarea);
        }, 10);
    });
</script>