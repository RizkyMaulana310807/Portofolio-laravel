@section('header', 'Content Management System')
<div class="bg-red-500 flex w-full h-full flex-col">
    <div>
        <h1>
            Content Management System {CMS}
        </h1>
    </div>

    {{-- search box --}}
    <div class="bg-blue-500 flex w-full h-24">
        <div class="flex flex-row items-center bg-yellow-500 gap-6 px-8">
            <input class="bg-white px-6 py-4 rounded-full" type="text" placeholder="Search by text ...">
            <div class="bg-green-500 aspect-square w-14 flex items-center justify-center rounded-full">
                <i data-lucide="search" class=""></i>
            </div>
        </div>
    </div>
    {{-- content --}}
    <div class="bg-purple-500 flex w-full h-full">

    </div>
</div>
