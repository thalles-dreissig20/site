<template>
    <Standard>
        <template #content>
            <div class="flex flex-col items-center justify-center min-h-screen bg-primary text-gray-800">
                <h1 class="text-4xl font-bold mb-4">Olá</h1>
            </div>
        </template>
    </Standard>
</template>

<script lang="ts">
    import Standard from "@/layouts/standard.vue"
    export default {
        components: {
            Standard
        },
    }
</script>

<style scoped>

</style>
