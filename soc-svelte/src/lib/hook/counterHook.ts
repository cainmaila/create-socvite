import { writable } from 'svelte/store'

export function useCounter() {
  const { subscribe, update } = writable(0)

  return {
    subscribe,
    increment: () => update((n) => n + 1),
  }
}
