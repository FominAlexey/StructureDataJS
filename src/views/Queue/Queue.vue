<template>
    <PatternTask :nameStructureData="nameStructureData" :Task="Task"/>
    <div class="ms-2">
        <div class="input-group">
            <span class="input-group-text" id="inputGroup-sizing-default">Введите число элементов в очереди</span>
            <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example" v-model="countNumberArray">
            <button type="button" class="btn btn-primary" @click="randomArray(countNumberArray)">Создать очередь</button>
        </div>
        <div class="mt-2">{{ arrayNumbers }}</div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="left" v-model="direction">
            <label class="form-check-label" for="flexRadioDefault1">
                Левое направление
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked value="right" v-model="direction">
            <label class="form-check-label" for="flexRadioDefault2">
                Правое направление
            </label>
        </div>
        <div class="input-group mr-2">
            <span class="input-group-text" id="inputGroup-sizing-default">Введите число на сколько сдвинуть массив</span>
            <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example" v-model="countNumberDirection">
            <button type="button" class="btn btn-primary" @click="cyclicShift(countNumberDirection)">Реализовать циклический сдвиг</button>
        </div>
    </div> 
</template>
<script>
import PatternTask from '../../components/PatternTask.vue';
import { toRaw } from 'vue';
export default {
    data() {
        return {
            direction: '',
            countNumberDirection: '',
            countNumberArray: '',
            arrayNumbers: [],
            nameStructureData: 'Циклический сдвиг',
            Task: 'Создать список из заданного количества элементов. Выполнить циклический сдвиг этого списка на N элементов вправо или влево'
        }
    },
    methods: {
        randomArray(countNumberArray) {
            this.arrayNumbers = toRaw(Array.from({ length: countNumberArray }, () => Math.floor(Math.random() * 39)));
        },
        cyclicShift(countNumberDirection ) {
            if (this.direction == 'left') {
                for(let i = 0; i < countNumberDirection ;i++) this.arrayNumbers.push(this.arrayNumbers.shift());
            } else { 
                for(let i = 0; i < countNumberDirection ; i++) this.arrayNumbers.unshift(this.arrayNumbers.pop());
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