<script setup>
import NavBarrio from './components/NavBarrio.vue'
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

  <NavBarrio />

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

  <router-view></router-view>

</template>



<style scoped>

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
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.button{
  background-color: green;
  border: solid 3px rgb(0, 67, 0);
  border-radius: 5px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
