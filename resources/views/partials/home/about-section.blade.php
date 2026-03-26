<div class="w-screen h-screen flex">
    <div class="w-screen h-full bg-primary border-4 border-darker p-8">
        <div x-data="{ tab: 'about' }" class="flex flex-col items-center justify-center h-full">
            <!-- Menu -->
            <div class="bg-primary inline-flex rounded-md border-4 border-darker">

                <button @click="tab = 'awards'"
                    :class="tab === 'awards' ? 'bg-special/10 text-special' : 'text-main hover:bg-darker'"
                    class="px-6 py-3 transition font-bold">
                    AWARDS
                </button>

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

                <div x-show="tab === 'awards'">
                    Content awards
                </div>
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
                                sistem yang stabil dan efisien. Sebagai pengembang logika game, saya berdedikasi
                                mewujudkan visi
                                teknis klien melalui eksekusi kode yang presisi. Saya percaya bahwa setiap baris kode
                                harus
                                menjadi solusi seperti presisi mekanik yang saya terapkan dalam hobi otomotif saya</p>
                        </div>
                    </div>
                </div>

                <div x-show="tab === 'skills'">
                    Content skills
                </div>

            </div>

        </div>

    </div>
</div>