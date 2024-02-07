<script setup>
import { ref, onMounted, computed } from 'vue';
import TestGrid from '../components/TestGrid.vue'
import { useCounterStore } from '@/stores/counter';

const counterData = useCounterStore();

const count = ref(20)
const aStringToMessWith = ref("we're here, we're queer, visca el Frankfurt Vallès.")
const exercicis = ref([])
const gridCols = ref([])
const isRed = ref(false)
const isMounted = ref(false)


const exercicisNotEmpty = computed(() => {
  return exercicis.value.length ? "there are exercicis." : "there are no exercicis."
})

function increase(){
  count.value++
}

function clearCount(){
  count.value = 0;
}

function reverseString(){
  aStringToMessWith.value = aStringToMessWith.value.split("").reverse().join("")
}

function switchToRed(){
  isRed.value = !isRed.value
}

function fetchExercicis(){
  fetch("/api/exercicis", {
          method: "GET",
        })
        .then((response) => {
            response.json().then((data) => {
            exercicis.value = data;
            
            exercicis.value.map(exercici => 
            
            {

              for (const subThing in exercici){
                !gridCols.value.includes(subThing) && gridCols.value.push(subThing)
              }
            
            })

            console.log(gridCols.value)
            
            });
        })
        .catch((err) => {
            console.error(err);
          });
      }

onMounted(() => {

  fetchExercicis();
  isMounted.value = true

})

</script>

<template>
  <main>
    <div class="test_app_body">
      <div class="grid_list">
        <v-btn class="button" @click="() => increase()">Increase the count</v-btn>
        <v-btn class="button" @click="() => clearCount()">Clear</v-btn>
        <v-btn class="button" @click="() => reverseString()">Reverse the string.</v-btn>
        <v-btn class="button" :style='{backgroundColor: isRed ? "white" : "red"}' @click="() => switchToRed()">change text color to {{ isRed ? "white" : "red" }}.</v-btn>
        <v-btn class="button" @click="() => counterData.increment()">Increase the STORE count</v-btn>
        <v-btn class="button" @click="() => counterData.clear()">Clear the STORE count</v-btn>

      </div>


      <p>Count is: {{ count }}</p>
      <p>a <b>BOLD</b> statement: {{ aStringToMessWith }}</p>

      <p :class="{ red: isRed }">a text to switch the color of.</p>
    </div>

    {{ exercicisNotEmpty }} <br>
    PINIA store count: {{ counterData.count }} <br>
    PINIA store double count: {{ counterData.doubleCount }}

    <div>
      <TestGrid style="margin: auto;"
        :data="exercicis"
        :columns="gridCols">
      </TestGrid>
    </div>
  

 

  </main>
</template>

<style>

.grid_list{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(10px, auto);
}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.954);
  transition: 0.3s;
  background-color: antiquewhite;
  color: black;
  text-align: center;
  border-radius: 15px;
}

.card:hover {
  background-color: rgb(166, 4, 4);
}
.test_app_body{
  margin-top: 25vh;
}

.red{
  color: red;
}

</style>
