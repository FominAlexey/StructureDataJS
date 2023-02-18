<template>
    <h1 class="display-6 text-center mt-4">{{nameStructureData}}</h1>
    <p class="lead pl-5 ms-2">
        {{ Task }}
    </p>
</template>
    
<script setup>
defineProps({
    nameStructureData: String,
    Task: String,
})
</script>
    
<style>
    
</style>