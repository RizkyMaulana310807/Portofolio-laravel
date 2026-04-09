    <div class="w-screen h-screen flex flex-col xl:flex-row border-b-4 border-secondary bg-red-500">
        <div class="w-full xl:w-1/2 h-full bg-yellow-500 flex items-center justify-normal xl:justify-center">
            <div class="max-w-xs text-left p-8 space-y-4">
                <div class="inline-flex flex-col font-bold">
                    <p class="text-sm xl:text-baserole-title text-special border-b xl:border-b-4 border-main rounded-sm font-quicksand">BACKEND
                        ENGINEERING</p>
                    <p class="text-sm xl:text-baserole-title text-special border-t xl:border-t-4 border-main rounded-sm font-quicksand">TECHNICAL
                        GENERALIST</p>
                </div>

                <h1 class="text-5xl xl:text-7xl font-bold tracking-widest font-fredoka text-main">
                    RIZKY MAULANA
                </h1>

                <a href="#"
                    class="bg-transparent p-2 xl:p-4 font-quicksand font-extrabold text-main inline-block border-2 xl:border-4 border-special rounded-full hover:bg-special hover:text-bright transition-all duration-200 ease-in-out">
                    <i class="fa-solid fa-download text-sm xl:text-base"></i>
                    DOWNLOAD CV
                </a>
            </div>
        </div>
        <div class="w-full xl:w-1/2 h-full relative bg-blue-500">
            <img src="{{ asset('images/programmer.webp') }}" loading="lazy">
            <x-floating-card name="Laravel" class="top-[70px] left-[0vw]"></x-floating-card>
            <x-floating-card name="Backend developer" class="top-[20px] left-[30vw]"></x-floating-card>
            <x-floating-card name="#Codingholic" class="top-[5px] left-[10vw]"></x-floating-card>
        </div>
    </div>
