<template>
  <link
    v-for="(style, key) in styles"
    :key="key"
    rel="stylesheet"
    :href="String(style)"
  />
  <div class="main-conatiner">
    <template v-if="loading">
      <div class="backdrop"></div>
      <Loader></Loader>
    </template>
    <div class="data-container" v-if="!loading">
      <nav class="data-navigation">
        <div class="place-time">
          <div class="place-weather">
            <div class="place-name">{{ location }}</div>
            <img class="weather-type-icon" :src="icon" alt="type of weather" />
          </div>
          <div class="place-date">{{ date }}</div>
        </div>
        <hr />
        <div class="buttons">
          <button
            :style="{
              color: tab === 'weather' ? '#889ce7' : '',
            }"
            @click="changeTab('weather')"
          >
            Weather
          </button>
          <button
            :style="{
              color: tab === 'details' ? '#889ce7' : '',
            }"
            @click="changeTab('details')"
          >
            Details
          </button>
        </div>
      </nav>
      <main v-if="data">
        <SimpleWeatherPane v-if="tab === 'weather'" :data="data" />
        <DetailWeatherPane v-if="tab === 'details'" :data="data" />
        <div class="complex-data-container"></div>
      </main>
      <div v-else>No data</div>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";
import dayjs from "dayjs";
import SimpleWeatherPane from "./subcomponents/SimpleWeatherPane.ce.vue";
import DetailWeatherPane from "./subcomponents/DetailWeatherPane.ce.vue";
import Loader from "./subcomponents/Loader.ce.vue";
import sunImage from "../../assets/images/sun.png";
import nightImage from "../../assets/images/night.png";
import cloudImage from "../../assets/images/cloud_day.png";
import rainImage from "../../assets/images/rain_day.png";
import rainNightImage from "../../assets/images/rain_night.png";
import { getSunset } from "sunrise-sunset-js";

export default {
  components: {
    SimpleWeatherPane,
    DetailWeatherPane,
    Loader,
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
    const date = ref("");
    const icon = ref(sunImage);
    let eventSource;

    /* Functions */
    const startSse = (location) => {
      if (!location) {
        return;
      }

      if (location === "Vrapce") {
        eventSource = new EventSource(
          "http://localhost:8080/v1/getVrapceEvents"
        );
      } else if (location === "Mlinovi") {
        eventSource = new EventSource(
          "http://localhost:8080/v1/getMlinoviEvents"
        );
      }

      eventSource.addEventListener("open", (data) => {
        console.debug("Event source opened for location:", location);
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
        date.value = dayjs().format("HH:mm - DD.MM.YYYY.");
        data.value.Elevation = location === "Vrapce" ? 40 : 242;
        setIcon();
      });

      eventSource.addEventListener("error", (err) => {
        eventSource.close();
      });
    };

    const closeSse = () => {
      eventSource.close();
    };

    const changeTab = (newTab) => {
      tab.value = newTab;
    };

    const setIcon = () => {
      icon.value = sunImage;
      var zagrebLong = 45.815;
      var zagrebLang = 15.9819;
      var currentDate = dayjs();
      var currentHour = currentDate.hour();
      var currneMinutes = currentDate.minute();
      const sunset = dayjs(getSunset(zagrebLong, zagrebLang));
      var sunsetHour = sunset.hour();
      var sunsetMinutes = sunset.minute();

      if (
        currentHour > sunsetHour ||
        (currentHour === sunsetHour && currneMinutes > sunsetMinutes)
      ) {
        if (data.value.PrecipationRate > 0) {
          icon.value = rainNightImage;
        } else {
          icon.value = nightImage;
        }
      } else if (data.value.SolarRadiation <= 150 && data.value.UV === 0) {
        if (data.value.PrecipationRate > 0) {
          icon.value = rainImage;
        } else {
          icon.value = cloudImage;
        }
      }
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
      date,
      icon,
      loading,
      changeTab,
    };
  },
};
</script>

<style>
@import "../../assets/css/dataPane.css";
@import "../../assets/css/detailPane.css";
@import "../../assets/css/loading.css";
@import "../../assets/css/simplePane.css";
</style>
