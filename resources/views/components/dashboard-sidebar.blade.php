<!-- SIDEBAR -->
<aside class="fixed top-0 left-0 w-64 h-screen bg-secondary text-main z-50 border-r border-main">
    <div class="p-4 border-b border-main font-bold">
        DASHBOARD
    </div>

    <nav class="p-4 space-y-2">
        <a href="{{ route('dashboard.main') }}" class="block px-3 py-2 rounded hover:bg-primary">
            Dashboard
        </a>
        <a href="{{ route('dashboard.contentmanagementsystem') }}" class="block px-3 py-2 rounded hover:bg-primary">
            CMS
        </a>
        <a href="{{ route('dashboard.resourcemanagement') }}" class="block px-3 py-2 rounded hover:bg-primary">
            Resource
        </a>

    </nav>

</aside>
