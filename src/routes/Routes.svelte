<script lang="ts">
    import { Router, Route } from "svelte-routing";

    import Home from "../pages/Home.svelte";

    export let url: string = "";
</script>

<Router {url}>
    <Route path="/" component={Home} />
    <Route path="/:type?" component={Home} />
    <Route path="/trending/:sort?" component={Home} />
</Router>
