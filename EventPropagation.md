Event propagation goes **from the outermost (parent) to the innermost (child)** during the **capture phase**,
and then **from the child back up to the parent** during the **bubble phase**.

So, there are **two main phases** (plus one “target” moment in the middle):

---

### 🧭 The Three Phases of DOM Event Propagation

| Phase                  | Description                                                                                 | Example order (clicking on inner element) |
| ---------------------- | ------------------------------------------------------------------------------------------- | ----------------------------------------- |
| **1. Capturing phase** | The event travels **down** from the document root → through parent → to the target element. | `document → body → parent → child`        |
| **2. Target phase**    | The event reaches the **target element** you actually clicked.                              | `child`                                   |
| **3. Bubbling phase**  | The event then travels **back up** the DOM from the target → parent → root.                 | `child → parent → body → document`        |

---

### 🧩 What Vue Does

Vue (and most JavaScript event listeners by default) attaches handlers in the **bubbling phase** — the second part of that process.

So when you do this:

```vue
<div class="child" @click="childHandler">
  <div class="parent" @click="parentHandler">
    Click me!
  </div>
</div>
```

and click on the child:

1. The event is created.
2. Capturing happens (rarely used unless you specify `{ capture: true }`).
3. The `childHandler` runs first (because it’s attached directly to the clicked element).
4. Then the event bubbles **up**, and `parentHandler` runs.

---

### 🧠 Why this matters in your Vue example

In your example:

```vue
<!-- Parent -->
<HelloWorld @click="parentHandler" />
```

```vue
<!-- Child -->
<template>
  <div @click="callback">child div</div>
</template>
```

When the `<div>` is clicked:

1. The `callback` runs first (it’s the direct target).
2. The event bubbles up.
3. Vue sees that `<HelloWorld>` was “clicked,” so it calls the parent’s `@click` listener.

✅ **Child first, then parent** — because of bubbling.

---

### ⚙️ You can control this

If you ever want to **stop the bubbling**, you can use:

```vue
<div @click.stop="callback">Click me</div>
```

That prevents the event from traveling up — the parent won’t see it.

Or if you ever want to catch it **before it reaches the child**, you can add `{ capture: true }` manually in JavaScript:

```js
element.addEventListener('click', handler, { capture: true })
```

…but Vue doesn’t provide a shorthand for that — it always uses bubbling.

---

✅ **Summary**

* DOM events go **down (capture)** → **target** → **up (bubble)**.
* Vue’s `@click` handlers listen during the **bubbling phase** (the default).
* That’s why your **child’s `@click` fires first**, then the **parent’s `@click`**.

---
