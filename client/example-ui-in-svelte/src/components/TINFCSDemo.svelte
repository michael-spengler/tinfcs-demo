<script>
  let userInput = "";

  const exampleItems = ["Fritz", "Amanda", "Sonja", "Heinz"];

  function doIt() {
    if(confirm("are you sure?")) {
      alert("you did it")
    } else {
      alert("ok whatever")
    }
  }
</script>

<div class="center">
  
  <p><br></p>

  <button on:click={doIt}>
    Push Me
  </button>

  <p><br></p>


  <input bind:value={userInput} />
  
  <br />
  
  You have entered: {userInput}
  
  {#if userInput !== ""}
  {#each exampleItems as item}
  <p>
    {item}
  </p>
  {/each}
  {/if}

</div>

<style>
  .center{
    align-items: center;
    text-align: center;
  }
</style>
