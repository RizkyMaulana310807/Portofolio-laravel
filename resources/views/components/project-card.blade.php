<div {{ $attributes->merge([
    'class' => "transform bg-bright text-main p-2 xl:p-6 w-52 xl:w-80 border-4 border-secondary relative hover:scale-105 transition-all duration-300 ease-out rounded-2xl
"
]) }}>

    <!-- Header -->
    <div class="flex justify-between items-start mb-6">
        <div>
            <p class="text-md xl:text-2xl font-bold opacity-80">{{ $number }}</p>
            <p class="text-xs xl:text-sm uppercase tracking-widest opacity-70">
                {{ $subtitle }}
            </p>
        </div>

        <div class="w-6 h-6 xl:w-8 xl:h-8 border-2 border-primary flex items-center justify-center rounded-md">
            <i class="fa-solid text-xs xl:text-base {{ $icon }}"></i>
        </div>
    </div>

    <!-- Image -->
    <div class="border border-primary mb-6">
        <img src="{{ $image }}" class="w-full h-32 xl:h-48">
    </div>

    <!-- Title -->
    <h3 class="text-md xl:text-2xl font-bold">
        {{ $title }}
    </h3>

    <!-- Subtitle -->
    <p class="text-special text-xs xl:text-sm font-semibold mb-4">
        {{ $subtitle }}
    </p>

    <!-- Tags -->
    <div class="flex flex-wrap gap-2 mb-6">
        @foreach($tags as $tag)
            <span class="text-xs bg-secondary px-2 py-1 rounded">
                {{ $tag }}
            </span>
        @endforeach
    </div>
    <!-- Play Button -->
    <div class="absolute bottom-[-20px] left-6">
        <div
            class="bg-special text-bright w-10 h-10 xl:w-12 xl:h-12 flex items-center justify-center rounded-full gap-2 hover:w-24 hover:rounded-full hover:px-4 hover:justify-evenly cursor-pointer transition-all duration-200 ease-in-out group">
            <i class="fa-solid fa-play tex-xs xl:text-base"></i>
            <span class="hidden group-hover:block text-xs xl:text-base font-quicksand font-bold transition-all duration-200 ease-in-out">
                {{ $playable ? 'Play' : 'Check' }}
            </span>
        </div>
    </div>
    <!-- likebutton -->
    <div class="absolute bottom-[-20px] right-6">
        <div
            class="bg-special text-bright gap-2 w-10 h-10 xl:w-12 xl:h-12 flex items-center justify-center rounded-full border-2 border-transparent hover:border-accent hover:bg-bright hover:w-24 cursor-pointer transition-all duration-200 ease-in-out group">
            <i data-lucide="thumbs-up" class="text-bright group-hover:text-accent tex-xs xl:text-base"></i>
            <span class="hidden group-hover:block text-accent text-xs xl:text-base font-quicksand font-bold transition-all duration-200 ease-in-out">
                200
            </span>

        </div>
    </div>


</div>