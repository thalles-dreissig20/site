<template>
    <div class="flex flex-col min-h-screen">
        <header class="bg-white shadow p-4">
            <div class="container mx-auto">
                <h1 class="text-xl font-semibold">Meu Site</h1>
            </div>
        </header>

        <main class="flex-1 p-4 bg-primary">
            <div class="container mx-auto">
                <slot name="content" />
            </div>
        </main>

        <footer class="bg-white shadow p-4">
            <div class="container mx-auto text-sm text-gray-500 text-center">
                &copy; {{ new Date().getFullYear() }} Meu Site. Todos os direitos reservados.
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'Standard',
    }
</script>
