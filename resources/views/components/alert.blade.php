<div 
    x-data="{ 
        show: true,
        init() {
            setTimeout(() => {
                this.show = false;
            }, 3000);
        }
    }" 
    x-show="show"
    x-transition:enter="transition ease-out duration-500"
    x-transition:enter-start="opacity-0 -translate-x-full"
    x-transition:enter-end="opacity-100 translate-x-0"
    x-transition:leave="transition ease-in duration-300"
    x-transition:leave-start="opacity-100 translate-x-0"
    x-transition:leave-end="opacity-0 -translate-x-full"
    class="p-4 rounded-lg flex justify-between items-center absolute top-2 left-2 z-90 {{ $styles() }}"
>
    <span>
        {{ $slot }}
    </span>

    <button 
        @click="show = false" 
        class="ml-4 text-sm font-bold cursor-pointer transition-all duration-200 hover:scale-75"
    >
        <i data-lucide="x"></i>
    </button>
</div>