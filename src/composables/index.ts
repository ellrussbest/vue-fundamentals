import {
  reactive,
  ref,
  toValue,
  watch,
  watchEffect,
  watchPostEffect,
  watchSyncEffect,
} from 'vue';

export function useVoid() {
  // -------------------------
  // Reactive state variables
  // -------------------------
  const a = ref(1); // a reactive number
  const b = ref(2); // another reactive number
  const count = ref(0); // count reactive number
  const state = reactive({
    count: 0,
    name: 'Vue',
  });

  console.log(state.count, state.name);

  // -------------------------
  // Regular watch
  // -------------------------
  // Watches 'count' specifically. Callback receives new and old values.
  // Runs AFTER the DOM has updated.
  watch(count, (newVal, oldVal) => {
    console.log(`count changed from ${oldVal} to ${newVal}`);
  });

  // Watch multiple reactive sources at once: a and b.
  // Callback receives arrays of [newValues], [oldValues].
  watch([a, b], ([newA, newB], [oldA, oldB]) => {
    console.log(`a: ${oldA} → ${newA}, b: ${oldB} → ${newB}`);
  });

  // -------------------------
  // watchEffect
  // -------------------------
  // Automatically tracks any reactive dependencies accessed inside the function.
  // Here, it tracks 'count', so it reruns whenever count changes.
  // Runs asynchronously after the component renders the first time and after any dependency changes.
  watchEffect(() => {
    console.log(`watchEffect: count is ${toValue(count)}`);
  });

  // -------------------------
  // watchPostEffect
  // -------------------------
  // Similar to watchEffect, but guaranteed to run **after DOM updates**.
  // Useful when you need to react to changes after the DOM has rendered.
  watchPostEffect(() => {
    console.log(`watchPostEffect: count is ${toValue(count)}`);
  });

  // -------------------------
  // watchSyncEffect
  // -------------------------
  // Runs **synchronously**, before DOM updates.
  // Use this when you need to run code immediately as dependencies change.
  watchSyncEffect(() => {
    console.log(`watchSyncEffect: count is ${toValue(count)}`);
  });

  // -------------------------
  // Return state so it can be used outside
  // -------------------------
  return { a, b, count };
}
