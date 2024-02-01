<script>

  import NavBarrio from './components/NavBarrio.vue'

  export default{
    data(){
      return{
        count: 20,
        weirdArray: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        passAsProp: "a text",
        fact: "waiting for a fact.",
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
      fetchData() {
      fetch('https://facts-by-api-ninjas.p.rapidapi.com/v1/facts', {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": 'sBDTDfFXcsgZYNzX7ZqILw==AWVbTS3u6LAk1UPl',
          "X-RapidAPI-Host": 'facts-by-api-ninjas.p.rapidapi.com',
        },
      })
        .then((response) => {
          response.json().then((data) => {
            this.fact = data;
            console.log(data)
          });
        })
        .catch((err) => {
          console.error(err);
        });
    },
    },
  }
  
</script>


<template>

  <NavBarrio />

  <button class="button" @click="() => increase()">Increase the count</button>
  <button class="button" @click="() => clear()">Clear</button>
  <button class="button" @click="() => fetchData()">fetch a fact</button>
  <p>Count is: {{ count }}</p>
  <div>{{ fact }}</div>
  <router-view></router-view>

</template>



<style scoped>
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
