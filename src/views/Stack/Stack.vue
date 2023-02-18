<template>
    <PatternTask :nameStructureData="nameStructureData" :Task="Task"/>
    <div class="mt-2">{{ firstStack.stack }}</div>
    <div class="mt-2">{{ secondStack.stack }}</div>
    <div class="mt-2">{{ swapStack.stack }}</div>
    <button type="button" class="btn btn-primary" @click="swapPlaces">Реализовать циклический сдвиг</button>

</template>
<script>
import PatternTask from '../../components/PatternTask.vue';
import Stack from '../../store/objects/Stack'
export default {
    data() {
        let firstStack = new Stack();
        let secondStack = new Stack();
        let swapStack = new Stack();
        this.randomElementsStack(firstStack, secondStack);
       
        return {
            nameStructureData: 'Поменять местами',
            Task: 'Создать два стека и поменять информацию местами',
            firstStack: firstStack,
            secondStack: secondStack,
            swapStack: swapStack,
        }
    },
    methods: {
        randomElementsStack(firstStack, secondStack) {
            for (let i = 0; i < 10; i++) {
                firstStack.push(i);
            }
            for (let i = 10; i < 20; i++) {
                secondStack.push(i);
            }
            this.firstStack = firstStack;
            this.secondStack = secondStack;
        },
        swapPlaces() {
            for (let i = 0; i < 10; i++) {
                this.swapStack.push(this.firstStack.pop());
            } 
            for (let i = 0; i < 10; i++) {
                this.swapStack.push(this.secondStack.pop());
            } 
            for (let i = 0; i < 10; i++) {
                this.firstStack.push(this.swapStack.pop());
            } 

             for (let i = 0; i < 10; i++) {
                this.secondStack.push(this.swapStack.pop());
            } 
        }
    },
    components: {
        PatternTask: PatternTask
    }
};

</script>    

    
<style>
    
</style>