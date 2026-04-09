<div {{ $attributes->merge([
    'class' => 'floating-card absolute px-2 xl:px-4 py-2 text-xs xl:text-base bg-primary/30 backdrop-blur-lg rounded-xl shadow-lg animate-float flex gap-2 items-center'
]) }}>
    <span>{{ $name }}</span>
    <span><i class="fa-solid fa-x fa-xs"></i></span>
</div>