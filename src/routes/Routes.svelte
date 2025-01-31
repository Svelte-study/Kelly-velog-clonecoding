<script lang="ts">
    import { Router, Route } from "svelte-routing";

    import Home from "../pages/Home.svelte";
  import Test from "../pages/Test.svelte";
  import Test2 from "../pages/Test2.svelte";

    export let url: string = "";
</script>

<Router {url}>
    <Route path="/*" component={Home} />
    <Route path="/test" component={Test}/>
    <Route path="/test2/*" component={Test2}/>
</Router>
