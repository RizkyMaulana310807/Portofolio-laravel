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
    <div class=" grid grid-cols-3 w-full h-full items-start p-4 gap-4">
        <x-cms-card></x-cms-card>
        <x-cms-card></x-cms-card>
        <x-cms-card></x-cms-card>
        <x-cms-card></x-cms-card>
        <x-cms-card></x-cms-card>
    </div>
</div>

{{-- script untuk textarea --}}
<script>
    const textareas = document.querySelectorAll('.auto-textarea');

    textareas.forEach(textarea => {
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
        });
    });
</script>
