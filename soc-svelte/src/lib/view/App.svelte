<script lang="ts">
  import svelteLogo from '$assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from '$lib/component/Counter.svelte'
  import { useCounter } from '$lib/hook/counterHook'

  const _count$ = useCounter()
</script>

<main class="flex flex-col text-center">
  <div class="flex justify-center">
    <img src={viteLogo} class="logo" alt="Vite Logo" />
    <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
  </div>
  <h1 class="text-6xl">DGIOTS SOC PWA</h1>
  <h2 class="text-4xl">Vite + Svelte + Tailwind + Pico.css</h2>
  <article class="flex justify-center">
    <Counter count={$_count$} on:click={_count$.increment} />
  </article>
</main>

<style>
  .logo {
    height: 14em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  * {
    margin: 1em 0;
  }
</style>
