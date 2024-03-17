<template>
  <div class="container">
    <div class="sidebar">
      <template v-for="(section, i) in components" :key="`section-${i}`">
        <h3 class="category-title">
          {{ section.name }}
        </h3>

        <ul
          v-for="(component, i) in section.components"
          :key="`component-${i}`"
          class="category-list"
        >
          <li class="category-list-item">
            <RouterLink
              class="component-link"
              :to="{ name: component.routeName }"
            >
              {{ component.name }}
            </RouterLink>
          </li>
        </ul>
      </template>
    </div>
    <div class="preview-content">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { shallowRef } from "vue";
import { RouterView, RouterLink } from "vue-router";

const components = shallowRef([
  {
    name: "Web components",
    components: [
      {
        routeName: "devDataPane",
        name: "Data pane",
      },
      {
        routeName: "devChartButtons",
        name: "Chart buttons",
      },
      {
        routeName: "devChartComponent",
        name: "Chart component",
      },
      {
        routeName: "devEnsiPane",
        name: "Ensi pane",
      },
      {
        routeName: "devRadarsPane",
        name: "Radars pane",
      },
      {
        routeName: "devForecastPane",
        name: "Forecast pane",
      },
    ],
  },
]);
</script>

<style>
:root {
  --wc-background: #1b1c1e;
  --wc-color: #889ce7;
  --wc-data-color: #a0a0a0;
  --wc-time: #a7b5e9;
}

body {
  margin: 0;
}
.container {
  display: flex;
  box-sizing: border-box;
  width: 100%;
}

.sidebar {
  min-width: 320px;
  text-align: center;
  background-color: #6da4b8;
  color: white;
  font-size: 16px !important;
  font-weight: 400;
  text-align: left;
  height: 100vh;
  overflow: auto;
}

.category-title {
  padding: 0.5em 1em;
}
.logo {
  margin: 1em auto;
  display: block;
}
.category-list {
  padding: 0;
  list-style-type: none;
}
.category-list-item {
  padding: 0;
}
.category-list-item:hover {
  background-color: #40becf;
}
.component-link {
  all: unset;
  display: block;
  width: 100%;
  cursor: pointer;
  padding: 0.5em 1em;
  box-sizing: border-box;
}

.router-link-exact-active {
  background-color: #40becf;
}

.preview-content {
  padding: 0px;
  margin: 0px;
  padding-left: 20px;
  background-color: #777;
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
</style>
