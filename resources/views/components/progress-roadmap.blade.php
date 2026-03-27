{{-- resources/views/components/roadmap-progress.blade.php --}}

@props([
    'current' => 1,
    'steps' => [
        ['title' => 'Junior',  'skills' => 'Composer, routing dasar, controller, Blade',        'project' => 'Membuat project dengan navigasi & pengelolaan data'],
        ['title' => 'Junior+', 'skills' => 'Migration, Eloquent (1:M), validation, middleware', 'project' => 'Mengelola database & validasi input'],
        ['title' => 'Middle',  'skills' => 'Auth, API, relasi M:M, repository',                 'project' => 'Membangun fitur login & REST API'],
        ['title' => 'Advance', 'skills' => 'Queue, Redis, testing, scheduler',                  'project' => 'Optimasi performa & automation'],
        ['title' => 'Expert',  'skills' => 'Package, SOLID, TDD, microservices, DevOps',        'project' => 'Arsitektur scalable & best practice'],
    ],
])

@once
<style>
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
    .icon-spin {
        animation: spin 1s linear infinite;
    }
</style>
@endonce

<div
    class="flex flex-col w-full h-full border-2 border-darker rounded-lg"
    x-data="{
        checked: 0,
        intervalId: null,

        startAnimation() {
            this.checked = 0;
            clearInterval(this.intervalId);
            setTimeout(() => {
                this.intervalId = setInterval(() => {
                    if (this.checked < {{ $current }}) {
                        this.checked++;
                    } else {
                        clearInterval(this.intervalId);
                    }
                }, 600);
            }, 800);
        },

        init() {
            this.startAnimation();
        }
    }"
    @roadmap-changed.window="startAnimation()"  {{-- ← reset tiap tab berganti --}}
>

    {{-- Header --}}
    <div class="flex flex-row justify-between w-full p-4 border-b-2 border-darker">
        <span><i class="fas fa-seedling text-green-500 text-lg"></i></span>
        <h1 class="font-quicksand font-bold text-main">Progress Roadmap</h1>
        <span class="font-quicksand text-sm text-main">{{ $current }}/{{ count($steps) }}</span>
    </div>

    {{-- List --}}
    <div class="flex flex-col gap-2">
        @foreach ($steps as $i => $step)
            <div class="flex items-start w-full">

                {{-- Icon --}}
                <div class="flex w-12 justify-center p-4 pt-1 shrink-0">

                    {{-- Spinner: tampil selama belum dicek --}}
                    <i
                        class="fas fa-spinner text-3xl text-gray-400 icon-spin"
                        x-show="checked <= {{ $i }}"
                    ></i>

                    {{-- Check: tampil setelah dicek, tanpa animasi gerak --}}
                    <i
                        class="fas fa-check-circle text-3xl text-green-500"
                        x-show="checked > {{ $i }}"
                        x-transition:enter="transition duration-300"
                        x-transition:enter-start="opacity-0"
                        x-transition:enter-end="opacity-100"
                    ></i>

                </div>

                {{-- Teks --}}
                <div class="py-1">
                    <h1 class="font-fredoka font-bold text-main">{{ $step['title'] }}</h1>
                    <p class="text-xs font-quicksand text-main">{{ $step['skills'] }}</p>
                    <p class="text-xs font-quicksand text-main">└─ {{ $step['project'] }}</p>
                </div>

            </div>
        @endforeach
    </div>

</div>