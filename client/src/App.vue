<!-- <script >

  import NavBarrio from './components/NavBarrio.vue'

  export default{
    data(){
      return{
        count: 20,
        weirdArray: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        passAsProp: "a text",
        fact: "waiting for a fact.",
        exercicis: "",
      }
    },
    components:{

        NavBarrio,

    },
    methods:{
      increase(){
        this.count++;
        console.log(this.count)
      },
      clear(){
        this.count = 0;
        console.log("count cleared.")
      },
      fetchExercises(){
        fetch("/api/exercicis", {
          method: "GET",
        })
        .then((response) => {
            response.json().then((data) => {
            this.exercicis = data;
            console.log(data)});
        })
        .catch((err) => {
            console.error(err);
          });
      },
      mounted(){
        console.log("logging on mount.")
        this.fetchExercises();
      }
    },
  }

</script> -->

<script setup>
import NavBarrio from './components/NavBarrio.vue'
import { ref } from 'vue';

const count = ref(20)
const aStringToMessWith = ref("we're here, we're queer, visca el Frankfurt Vallès.")
const exercicis = ref([])
const isRed = ref(false)

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
            this.exercicis.value = data;
            console.log(data)});
        })
        .catch((err) => {
            console.error(err);
          });
      }

</script>

<template>

  <NavBarrio />

  <button class="button" @click="() => increase()">Increase the count</button>
  <button class="button" @click="() => clearCount()">Clear</button>
  <button class="button" @click="() => reverseString()">Reverse the string.</button>
  <button class="button" @click="() => fetchExercicis()">fetch all exercicis</button>
  <button class="button" @click="() => switchToRed()">change the color of the text to {{ isRed ? "white" : "red" }}.</button>
  <p>Count is: {{ count }}</p>
  <p>a <b>BOLD</b> statement: {{ aStringToMessWith }}</p>
  <div>{{ exercicis }}</div>

  <p :class="{ red: isRed }">a text to switch the color of.</p>
  <!-- <ul>
    <li v-for="exercici in exercicis">{{ exercici.tipus}}</li>
  </ul> -->
  <router-view></router-view>

</template>



<style scoped>

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
