@section('header', 'Analytics Overview')
<div class="flex flex-col w-full gap-12">
    <!-- top section -->
    <div class="flex w-full gap-4">
        <!-- graphics -->
        <div
            class="flex w-1/2 flex-col bg-bright p-4 gap-8 rounded-2xl hover:shadow-2xl hover:shadow-ink-black transition-all duration-500 ease-in-out">
            <!-- top section -->
            <div class="flex flex-row w-full">
                <!-- left section -->
                <div class="flex flex-col w-1/2 justify-between p-4">
                    <h1 class="font-quicksand">Total View</h1>
                    <div>
                        <div>
                            <h1 class="font-quicksand font-bold text-4xl flex flex-row gap-2 items-center"><i
                                    data-lucide="eye"></i>44.4k</h1>
                        </div>
                        <div class="flex">
                            <h1
                                class="bg-red-400/50 flex gap-2 p-1 rounded-full px-2 text-red-500/80 text-medium font-quicksand font-bold border border-red-500/80">
                                <i data-lucide="trending-down" class="text-xs"></i>37%
                            </h1>
                        </div>
                    </div>
                </div>
                <!-- right section -->
                <div class="flex w-full">
                    <canvas id="analyticsChart"></canvas>
                </div>
            </div>


            <!-- bottom section -->
            <div class="flex flex-row gap-4">
                <!-- card -->
                <div
                    class="flex flex-col p-4 w-full border-r-2 border-b-4 border-t-2 border-t-secondary border-l-2 border-l-secondary rounded-2xl border-steel-blue hover:border-t-steel-blue hover:border-l-steel-blue hover:border-secondary transition-all duration-200 ease-in-out">
                    <div class="flex flex-row items-center gap-2 font-quicksand text-steel-blue">
                        <i data-lucide="eye"></i>
                        2000
                    </div>
                    <div class="font-quicksand text-steel-blue">
                        View Rate
                    </div>
                </div>
                <div
                    class="flex flex-col p-4 w-full border-r-2 border-b-4 border-t-2 border-t-secondary border-l-2 border-l-secondary rounded-2xl border-amber-gold hover:border-t-amber-gold hover:border-l-amber-gold hover:border-secondary transition-all duration-200 ease-in-out">
                    <div class="flex flex-row items-center gap-2 font-quicksand text-amber-gold">
                        <i data-lucide="frown"></i>2000
                    </div>
                    <div>
                        <h1 class="font-quicksand text-amber-gold">
                            Bounce rate
                        </h1>
                    </div>
                </div>

                <div
                    class="flex flex-col p-4 w-full border-r-2 border-b-4 border-t-2 border-t-secondary border-l-2 border-l-secondary rounded-2xl border-cinnabar hover:border-t-cinnabar hover:border-l-cinnabar hover:border-secondary transition-all duration-200 ease-in-out">
                    <div class="flex flex-row items-center gap-2 font-quicksand text-cinnabar">
                        <i data-lucide="triangle-alert"></i>2000
                    </div>
                    <div>
                        <h1 class="font-quicksand text-cinnabar">
                            Bounce rate
                        </h1>
                    </div>
                </div>

            </div>
        </div>

        <!-- something -->
        <div class="bg-bright w-1/2 flex rounded-2xl">

        </div>
    </div>

    <!-- [SYSTEM LOG] -->

    <div class="bg-bright flex w-full h-72 rounded-2xl">
        <div class="flex w-full p-4">
            <h1>[SYSTEM LOG]</h1>
        </div>
        <div class="bg-yellow-500">

        </div>
    </div>
</div>