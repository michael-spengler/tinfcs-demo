
<script>

  import Home from "@/components/Home.svelte";
  import { fade } from "svelte/transition";
  import Navigation from "./components/Navigation.svelte";
  import TinfcsDemo from "./components/TINFCSDemo.svelte";

  let name = "World";

</script>

<div class="ourBasicBackground">
  <main transition:fade>
    <Home {name} />
  </main>

</div>

<TinfcsDemo />

<p><br></p>

<Navigation />

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  .ourBasicBackground {
    background-color: green;
  }
</style>
