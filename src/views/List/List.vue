<template>
    <PatternTask :nameStructureData="nameStructureData" :Task="Task"/>
    <div class="ms-2">
        <div class="input-group">
            <span class="input-group-text" id="inputGroup-sizing-default">Введите число элементов в списке</span>
            <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example" v-model="countNumberList">
            <button type="button" class="btn btn-primary" @click="randomList(countNumberList)">Создать список</button>
        </div>
        <div class="input-group mt-1">
            <span class="input-group-text me-2" id="inputGroup-sizing-default">Первый список</span>
            <div class="mt-2">{{ firstList }}</div>
        </div>
        <div class="input-group mt-1">
            <span class="input-group-text me-2" id="inputGroup-sizing-default">Второй список</span>
            <div class="mt-2">{{ secondList }}</div>
        </div>
        <button type="button" class="btn btn-primary mt-1" @click="LeastSquaresMethod">Посчитать</button>
        <div class="input-group mt-1">
            <span class="input-group-text me-2" id="inputGroup-sizing-default">Сопротивление</span>
            <div class="mt-2">{{ R }}</div>
        </div>
        <div class="input-group mt-1">
            <span class="input-group-text me-2" id="inputGroup-sizing-default">Сумма квадратов тока</span>
            <div class="mt-2">{{ isQR }}</div>
        </div>
        <div class="input-group mt-1">
            <span class="input-group-text me-2" id="inputGroup-sizing-default">Результат</span>
            <div class="mt-2">{{ result }}</div>
        </div>
    </div> 
</template>
<script>
import PatternTask from '../../components/PatternTask.vue';
export default {
    data() {
       
        return {
            nameStructureData: 'Метод наименьших квадратов',
            Task: 'Задано два списка, которые содержат результаты N-измерений тока (I) и напряжения (U) на неизвестном сопротивлении (R). Найти приближенное значение R методом наименьших квадратов',   
            firstList: [],
            secondList: [],
            countNumberList: '',
            R: 0,
            isQR: 0,
            result: 0,
        }
    },
    methods: {
         randomList(countNumberList) {
            this.firstList = Array.from({ length: countNumberList }, () => (Math.random().toFixed(1) * 39));
            this.secondList = Array.from({ length: countNumberList }, () => (Math.random().toFixed(1) * 39));
        },
        LeastSquaresMethod() {
            this.R = 0;
            this.isQR = 0;
            let i = 0;
            while (this.firstList[i] != this.firstList[length - 1] && this.secondList[i] != this.secondList[length - 1]) {
                this.R += this.firstList[i] * this.secondList[i];
                this.isQR += this.firstList[i] * this.firstList[i];
                i++;
            }
            return this.result = this.R / this.isQR;
        }
    },
    components: {
        PatternTask: PatternTask
    }
};

</script>    

    
<style>
    
</style>