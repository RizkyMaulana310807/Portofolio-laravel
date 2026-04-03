<div class="w-screen flex">
    <div class="w-screen h-full bg-primary border-4 border-darker p-8">
        <div x-data="{ tab: 'skills' }" class="flex flex-col items-center justify-center h-full">
            <!-- Menu -->
            <div class="bg-primary inline-flex rounded-md border-4 border-darker">

                <!-- <button @click="tab = 'awards'"
                    :class="tab === 'awards' ? 'bg-special/10 text-special' : 'text-main hover:bg-darker'"
                    class="px-6 py-3 transition font-bold">
                    AWARDS
                </button> -->

                <button @click="tab = 'about'"
                    :class="tab === 'about' ? 'bg-special/10 text-special' : 'text-main hover:bg-darker'"
                    class="px-6 py-3 transition font-bold">
                    ABOUT
                </button>

                <button @click="tab = 'skills'"
                    :class="tab === 'skills' ? 'bg-special/10 text-special' : 'text-main hover:bg-darker'"
                    class="px-6 py-3 transition font-bold">
                    SKILLS
                </button>


            </div>

            <!-- Content -->
            <div class="mt-6 h-full w-full">

                <!-- <div x-show="tab === 'awards'">
                    Content awards
                </div> -->
                <!-- tab about -->
                <div x-show="tab === 'about'" class="flex flex-row h-full w-full">
                    <div class="w-1/2 h-full flex p-6">
                        <div class="w-full space-y-2 bg-bright p-4 rounded-2xl shadow-xl">
                            <div class="flex flex-row justify-between w-full items-center">
                                <span class="font-quicksand bg-bright rounded-full p-2 font-bold">Riwayat
                                    Pendidikan</span>
                                <span
                                    class="font-quicksand bg-special/90 rounded-full px-2 py-1 font-bold text-bright">On
                                    Going</span>
                            </div>
                            <div id="timelineRiwayatPendidikan" class="max-w-2xl mx-auto">

                            </div>
                        </div>
                    </div>

                    <div
                        class="w-1/2 h-full flex flex-col justify-evenly items-center p-6 bg-bright rounded-2xl shadow-2xl relative">

                        <div class="w-36 h-36 rounded-full bg-accent absolute z-10 left-95 top-37 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
                            id="mouseCircle"></div>

                        <div class="w-full h-full absolute bg-red-500/0 z-50 rounded-2xl" id="mouseMovementArea"></div>

                        <div class="flex items-start w-full space-x-14">
                            <h1 class="text-6xl font-fredoka font-semibold z-20">
                                Rizky<br>Maulana
                            </h1>
                            <img src="https://i.pinimg.com/736x/a2/22/cf/a222cfa4df0596e6a490b96a06561cd1.jpg" alt="pfp"
                                class="h-32 rounded-full border-4 border-darker z-20">
                        </div>
                        <div class="flex">
                            <p class="font-quicksand font-semibold z-20">Hai! Saya Rizky,
                                Seorang pengembang yang berfokus pada arsitektur logika, baik untuk web, mobile, maupun
                                game. Dengan pengalaman komersial di Laravel (PHP) dan React Native (EAS Build), saya
                                membangun
                                sistem yang stabil dan efisien. Saya berpengalaman freelance untuk membuat aplikasi
                                berbasis laravel (website) dan aplikasi berbasis react native (mobile) selama kurang
                                lebih 6 bulan.</p>
                        </div>
                    </div>
                </div>

                <div x-show="tab === 'skills'" class="flex flex-row h-full w-full bg-yellow-500">
                    <div class="bg-primary w-1/2">
                        <div
                            class="bg-primary text-4xl font-fredoka font-bold flex justify-center p-4 border-4 rounded-lg border-darker">
                            <h1><i class="fas fa-terminal"></i> SKILLS <i class="fas fa-code"></i></h1>
                        </div>
                        @php
                            $roadmaps = [
                                'php' => ['icon' => 'fa-php', 'color' => '#777BB4', 'current' => 3],
                                'laravel' => ['icon' => 'fa-laravel', 'color' => '#FF2D20', 'current' => 4],
                                'js' => ['icon' => 'fa-js', 'color' => '#F7DF1E', 'current' => 5],
                                'react' => ['icon' => 'fa-react', 'color' => '#61DAFB', 'current' => 1],
                            ];
                        @endphp

                        <div x-data="{ roadmap: 'php' }"
                            class="bg-primary border-4 border-darker rounded-lg flex flex-row w-full">

                            {{-- Sidebar Icons --}}
                            <div class="flex w-3/12 h-full flex-col justify-evenly items-center">
                                @foreach ($roadmaps as $key => $rm)
                                                    <div @click="roadmap = '{{ $key }}'; $dispatch('roadmap-changed', { key: '{{ $key }}' })"
                                                        :class="roadmap === '{{ $key }}'
                                                        ? 'border-main bg-secondary scale-105'
                                                        : 'border-darker hover:bg-white'"
                                                        class="flex items-center justify-center w-38 h-38 border-4 cursor-pointer transition-all duration-200 ease-in-out">
                                                        <i class="fa-brands {{ $rm['icon'] }} text-8xl transition-all duration-200"
                                                            :class="roadmap === '{{ $key }}' ? 'drop-shadow-lg' : 'opacity-50'"
                                                            style="color: {{ $rm['color'] }}">
                                                        </i>
                                                    </div>
                                @endforeach
                            </div>
                            {{-- Content --}}
                            <div
                                class="flex flex-col w-full h-full bg-primary p-4 border-2 border-darker rounded-xl m-4">
                                @foreach ($roadmaps as $key => $rm)
                                    <div x-show="roadmap === '{{ $key }}'">
                                        <div x-key="roadmap" class="flex flex-col gap-8">
                                            <x-progress-bar-card :current="$rm['current']" />
                                            <x-progress-roadmap :current="$rm['current']" />
                                        </div>
                                    </div>
                                @endforeach
                            </div>

                        </div>
                    </div>

                    <div class="bg-bright flex w-1/2 h-full">
                        <div>
                            <h1>Sertification</h1>
                        </div>
                        <div>
                            <x-sertificate-card>

                            </x-sertificate-card>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </div>
</div>