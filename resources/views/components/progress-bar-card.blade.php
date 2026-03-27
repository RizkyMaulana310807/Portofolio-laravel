@props([
    'levels' => ['Junior', 'Junior+', 'Middle', 'Advance', 'Expert'],
    'current' => 1,
])

<div
    class="flex flex-row items-center justify-start h-full border-2 border-darker rounded-lg"
    x-data="{
        levels: @js($levels),
        current: {{ $current }},
        total: {{ count($levels) }},
        animated: 0,
        done: false,
        intervalId: null,

        startAnimation() {
            this.animated = 0;
            this.done = false;
            clearInterval(this.intervalId);
            let i = 1;
            this.intervalId = setInterval(() => {
                if (i <= this.current) {
                    this.animated = i;
                    i++;
                } else {
                    clearInterval(this.intervalId);
                    if (this.current >= this.total) {
                        setTimeout(() => { this.done = true; }, 400);
                    }
                }
            }, 400);
        },

        init() {
            this.startAnimation();
        }
    }"
    @roadmap-changed.window="startAnimation()"
>
    {{-- Icon --}}
    <div class="flex h-24 w-24 items-center justify-center">
        <span class="p-1.5 py-2.5 rounded-full">

            {{-- Spinner: tampil selama belum done --}}
            <i
                class="fas fa-spinner fa-spin font-bold text-green-500 text-4xl"
                x-show="!done"
            ></i>

            {{-- Check: tampil setelah done dengan animasi --}}
            <i
                class="fas fa-check-circle font-bold text-green-500 text-4xl"
                x-show="done"
                x-transition:enter="transition duration-500"
                x-transition:enter-start="opacity-0 scale-50"
                x-transition:enter-end="opacity-100 scale-100"
                style="display: none;"
            ></i>

        </span>
    </div>

    {{-- Steps --}}
    <div class="flex flex-row justify-between w-full h-full gap-1">
        <template x-for="(level, index) in levels" :key="index">
            <div class="flex w-full flex-col justify-evenly items-center">

                {{-- Label --}}
                <div class="flex w-full h-12 justify-center items-center">
                    <h1 class="font-quicksand font-semibold" x-text="level"></h1>
                </div>

                {{-- Progress bar --}}
                <div class="flex w-full h-12 items-center">
                    <div class="w-full h-3 rounded-full bg-gray overflow-hidden">
                        <div
                            class="h-full rounded-full bg-green-500 transition-all duration-500 ease-out"
                            :style="index + 1 <= animated ? 'width: 100%' : 'width: 0%'"
                        ></div>
                    </div>
                </div>

            </div>
        </template>
    </div>

</div>