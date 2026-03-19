<script>
    import Home from "./components/Home/Home.svelte";
    import Parent from "./Parent/Parent.svelte";

    const parents = ["Brian Klinik", "Maj-brittt Klinik"]

    const children = [
      {
        name: "Anders",
        familySheep: "black",
      },
      {
        name: "Krelle25",
        familySheep: "grey", 
      },
      {
        name: "Mikkel",
        isGirl: true,
      }
    ]

</script>


<Home>
<Parent name={parents[0]}, children={children}/>
<Parent name={parents[1]}, children={children}/>
</Home>