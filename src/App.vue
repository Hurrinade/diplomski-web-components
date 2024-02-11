<template>
  <div class="main">
    <data-pane :location.prop="'Vrapce'"></data-pane>
    <data-pane :location="'Mlinovi'"></data-pane>
  </div>
</template>

<style>
.main {
  padding: 2rem;
  display: flex;
  gap: 5rem;
  justify-content: center;
  align-items: center;
}

body {
  background-color: black;
}
</style>
