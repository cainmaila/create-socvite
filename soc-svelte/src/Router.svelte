<script lang="ts">
  import { Router, Route } from 'svelte-routing'
  import App from '$lib/views/App.svelte'
  let url = ''
</script>

<Router {url}>
  <!-- svelte-ignore missing-declaration -->
  <Route path="/" component={App} />
</Router>
