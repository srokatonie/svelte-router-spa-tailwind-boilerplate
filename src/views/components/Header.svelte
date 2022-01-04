<script>
  export let currentRoute
</script>

<nav class="bg-gray-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center h-16">
      <div class="flex items-center w-full justify-between">
        <div class="flex-shrink-0">
          <img class="h-8" src="/logo-blockchain-extraordinaire.svg" alt="Blockchain Extraordinaire">
        </div>
        <div class="ml-10 flex items-baseline space-x-4">
          <a href="/" class:bg-gray-900="{currentRoute.name == '/'}" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
          <a href="/about" class:bg-gray-900="{currentRoute.name == '/about'}" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
          <a href="/faq" class:bg-gray-900="{currentRoute.name == '/faq'}" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">FAQ</a>
        </div>
      </div>
    </div>
  </div>
</nav>