@section('header', 'Resource Manager')
{{-- parent --}}
<div class="flex h-full flex-col items-center justify-start">
    {{-- header --}}
    <div class="flex justify-between w-full p-4">
        <div class="flex gap-4">
            <span
                class="bg-darker border rounded-full px-4 py-1 font-quicksand cursor-pointer text-main border-main hover:bg-darker transition-all duration-200 ease-in-out">All</span>
            <span
                class="bg-primary border rounded-full px-4 py-1 font-quicksand cursor-pointer text-main border-main hover:bg-darker transition-all duration-200 ease-in-out">Images</span>
            <span
                class="bg-primary border rounded-full px-4 py-1 font-quicksand cursor-pointer text-main border-main hover:bg-darker transition-all duration-200 ease-in-out">PDF</span>
            <span
                class="bg-primary border rounded-full px-4 py-1 font-quicksand cursor-pointer text-main border-main hover:bg-darker transition-all duration-200 ease-in-out">Archive</span>

        </div>
        <div class="flex gap-4">
            <span
                class="bg-darker border rounded-full px-4 py-1 font-quicksand cursor-pointer text-main border-main hover:bg-darker transition-all duration-200 ease-in-out">Newest</span>
            <span
                class="bg-primary border rounded-full px-4 py-1 font-quicksand cursor-pointer text-main border-main hover:bg-darker transition-all duration-200 ease-in-out">A-Z</span>
            <span
                class="bg-primary border rounded-full px-4 py-1 font-quicksand cursor-pointer text-main border-main hover:bg-darker transition-all duration-200 ease-in-out">File</span>
            <span
                class="bg-primary border rounded-full px-4 py-1 font-quicksand cursor-pointer text-main border-main hover:bg-darker transition-all duration-200 ease-in-out">Size</span>
        </div>
    </div>

    {{-- content --}}
    <div class="grid grid-cols-4 w-full h-full items-start gap-12">
        <x-resource-preview-card></x-resource-preview-card>
        <x-resource-preview-card></x-resource-preview-card>
        <x-resource-preview-card></x-resource-preview-card>
        <x-resource-preview-card></x-resource-preview-card>
        <x-resource-preview-card></x-resource-preview-card>
        <x-resource-preview-card></x-resource-preview-card>
        <x-resource-preview-card></x-resource-preview-card>
    </div>

    {{-- footer page number --}}
    <div class="flex w-full p-4 justify-between">
        <div class="">
            <p class="text-main font-quicksand">Page 1 of 4 | Total Result</p>
        </div>
        <div class="">
            <p class="text-main font-quicksand">Page 1 of 4</p>
        </div>
    </div>
</div>
