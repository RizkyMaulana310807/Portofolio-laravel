<div {{ $attributes->merge([
    'class' => "transform bg-bright text-main p-6 w-80 border-4 border-secondary relative hover:scale-105 transition-all duration-300 ease-out rounded-2xl
"
]) }}>

    <!-- Header -->
    <div class="flex justify-between items-start mb-6">
        <div>
            <p class="text-2xl font-bold opacity-80">{{ $number }}</p>
            <p class="text-sm uppercase tracking-widest opacity-70">
                {{ $subtitle }}
            </p>
        </div>

        <div class="w-8 h-8 border-2 border-primary flex items-center justify-center rounded-md">
            <i class="fa-solid {{ $icon }}"></i>
        </div>
    </div>

    <!-- Image -->
    <div class="border border-primary mb-6">
        <img src="{{ $image }}" class="w-full h-48">
    </div>

    <!-- Title -->
    <h3 class="text-2xl font-bold">
        {{ $title }}
    </h3>

    <!-- Subtitle -->
    <p class="text-special text-sm font-semibold mb-4">
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
            class="bg-special text-bright w-12 h-12 flex items-center justify-center rounded-full hover:w-24 hover:rounded-full hover:px-4 hover:justify-evenly transition-all duration-200 ease-in-out group">
            <i class="fa-solid fa-play"></i>
            <span class="hidden group-hover:block transition-all duration-200 ease-in-out">
                {{ $playable ? 'Play' : 'Check' }}
            </span>
        </div>
    </div>

</div>