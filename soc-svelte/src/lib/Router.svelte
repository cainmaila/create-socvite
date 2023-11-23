<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import App from "$lib/view/App.svelte";
  let url = "";
</script>

<Router {url}>
  <Route path="/" component={App} />
</Router>
