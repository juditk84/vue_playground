<script>

</script>

<template>
    <header class="header">This is a nav bar.
        <router-link to="/">Go home</router-link>
        <router-link to="/about">Go to About</router-link>
    </header>
</template>

<style>
    .header{
        position:fixed; /* fixing the position takes it out of html flow - knows
                   nothing about where to locate itself except by browser
                   coordinates */
        left:0;           /* top left corner should start at leftmost spot */
        top:0;            /* top left corner should start at topmost spot */
        width:100vw;      /* take up the full browser width */
        z-index:200;        /* high z index so other content scrolls underneath */
        height:100px;     /* define height for content */
        background-color: black;
    }
</style>