<script>
  import { Router, Link, Route } from "svelte-routing";
  import Visitors from "./pages/Visitors/Visitors.svelte";
  import Restaurants from "./pages/Restaurants/Restaurants.svelte";
</script>

<Router>
  <nav>
    <Link to="/restaurants">Restaurants</Link>
    <Link to="/visitors">Visit</Link>
    <Link to="/about">About</Link>
  </nav>

  <div>
    <Route path="/restaurants"><Restaurants /></Route>
    <Route path="/visitors"><Visitors /></Route>
    <Route path="/about"></Route>
  </div>
</Router>