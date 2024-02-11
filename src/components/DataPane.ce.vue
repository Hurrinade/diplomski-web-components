<template>
  <div class="data-container">
    <nav class="data-navigation">
      <div class="place-time">
        <span class="place-name">{{ location }}</span>
        <img class="weather-type-icon" src="#" alt="type of weather" />
        <div>{{ "No date for now" }}</div>
      </div>
      <div class="buttons">
        <button @click="changeTab('weather')">Weather</button>
        <button @click="changeTab('details')">Details</button>
      </div>
    </nav>
    <main v-if="data">
      <SimpleWeatherPane v-if="tab === 'weather'" :data="data" />
      <div class="complex-data-container"></div>
    </main>
    <div v-else-if="loading">Loading</div>
    <div v-else>No data</div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";
import SimpleWeatherPane from "./SimpleWeatherPane.ce.vue";

export default {
  components: {
    SimpleWeatherPane,
  },
  props: {
    location: {
      type: String,
      default: "",
    },
    styles: {
      type: Array,
      default: () => null,
    },
  },
  setup(props) {
    /* Refs and variables */
    const data = ref(null);
    const tab = ref("weather");
    const loading = ref(true);
    let eventSource;

    /* Functions */
    const startSse = (location) => {
      if (!location) {
        return;
      }

      if (location === "vrapce") {
        eventSource = new EventSource(
          "http://localhost:8080/v1/getVrapceEvents"
        );
      } else if (location === "mlinovi") {
        eventSource = new EventSource(
          "http://localhost:8080/v1/getMlinoviEvents"
        );
      }

      eventSource.addEventListener("open", (data) => {
        console.info("Event source opened for location:", location, data);
        loading.value = false;
      });

      eventSource.addEventListener("data", (event) => {
        loading.value = false;
        const eventData = JSON.parse(event.data);
        if (eventData.error) {
          console.warn(eventData.notice);
          data.value = null;
          return;
        }

        data.value = eventData.data;
      });

      eventSource.addEventListener("error", (err) => {
        console.error(err);
        eventSource.close();
      });
    };

    const closeSse = () => {
      eventSource.close();
    };

    const changeTab = (newTab) => {
      tab.value = newTab;
    };

    onUnmounted(() => {
      closeSse();
    });

    onMounted(() => {
      startSse(props.location);
    });

    return {
      tab,
      data,
      loading,
      changeTab,
    };
  },
};
</script>
