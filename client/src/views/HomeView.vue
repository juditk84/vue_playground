<script setup>
import { ref, onMounted } from 'vue';

const count = ref(20)
const aStringToMessWith = ref("we're here, we're queer, visca el Frankfurt Vallès.")
const exercicis = ref([])
const isRed = ref(false)
const isMounted = ref(false)

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
            });
        })
        .catch((err) => {
            console.error(err);
          });
      }

onMounted(() => {

  fetchExercicis();
  isMounted.value = true
  console.log("useEffect equivalent loaded.")
})
</script>

<template>
  <main>
    <div class="test_app_body">
    <button class="button" @click="() => increase()">Increase the count</button>
    <button class="button" @click="() => clearCount()">Clear</button>
    <button class="button" @click="() => reverseString()">Reverse the string.</button>
    <button class="button" @click="() => switchToRed()">change the color of the text to {{ isRed ? "white" : "red" }}.</button>
    <p>Count is: {{ count }}</p>
    <p>a <b>BOLD</b> statement: {{ aStringToMessWith }}</p>

    <p :class="{ red: isRed }">a text to switch the color of.</p>
    <div class="grid_list">
      <div class="card" v-for="(exercici, index) in exercicis">Ex. nº: {{ exercici.id }} <br> {{ exercici.tipus }} <br> {{ exercici.especie }}</div>
    </div>
  </div>
  </main>
</template>

<style>

.grid_list{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
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
