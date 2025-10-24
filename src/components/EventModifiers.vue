<template>
  <div
    @click.prevent="onClickPrevent"
    @click.stop="onClickStop"
    @click.enter="onClickEnter"
    @click.self="onClickSelf"
    @click.right="onClickRight"
    @dblclick="onDoubleClick"
    class="demo-div"
  >
    Click Me
  </div>
</template>

<script setup>
function onClickPrevent(event) {
  // .prevent → calls event.preventDefault()
  // prevents default browser behavior (e.g., following a link, form submission)
  console.log('Click with .prevent fired');
}

function onClickStop(event) {
  // .stop → calls event.stopPropagation()
  // prevents the event from bubbling up to parent elements
  console.log('Click with .stop fired');
}

function onClickEnter(event) {
  // key modifier (like @keyup.enter) works for keyboard events
  // for clicks it does nothing; usually used like @keyup.enter
  console.log('Click with .enter fired');
}

function onClickSelf(event) {
  // .self → only triggers if the event target is the element itself
  // ignores events from children
  console.log('Click with .self fired');
}

function onClickRight(event) {
  // .right → triggers on right-click instead of left-click
  console.log('Right click fired');
}

function onDoubleClick(event) {
  // standard double-click event
  console.log('Double click fired');
}
</script>

<style scoped>
.demo-div {
  padding: 20px;
  border: 2px solid green;
  width: 200px;
  text-align: center;
  user-select: none;
}
</style>
