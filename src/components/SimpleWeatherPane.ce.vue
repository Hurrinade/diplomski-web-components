<template>
  <div class="weatherData">
    <div class="infoBox">
      <div class="metric-text">Current Temperature (°C)</div>
      <div class="icon-text-container">
        <img src="../../assets/images/temp.png" class="metric-icon" alt="" />
        <span class="metric-number"> {{ data.Temperature }} </span>
      </div>
    </div>
    <div class="infoBox">
      <div class="metric-text">Wind & Gust (m/s)</div>
      <div class="icon-text-container">
        <img src="../../assets/images/wind.png" class="metric-icon" alt="" />
        <span class="metric-number">
          {{ data.WindSpeed + "/" + data.WindGust }}
        </span>
      </div>
    </div>
    <div class="infoBox">
      <div class="metric-text">Pressure (hPa)</div>
      <span class="metric-number"> {{ data.Pressure }} </span>
    </div>
    <div class="infoBox">
      <div class="metric-text">Precipation rate (mm)</div>
      <div class="icon-text-container">
        <img src="../../assets/images/precip.png" class="metric-icon" alt="" />
        <span class="metric-number"> {{ data.PrecipationRate }} </span>
      </div>
    </div>
    <div class="infoBox">
      <div class="metric-text">Humidity (%)</div>
      <div class="icon-text-container">
        <img
          src="../../assets/images/humidity.png"
          class="metric-icon"
          alt=""
        />
        <span class="metric-number"> {{ data.Humidity }} </span>
      </div>
    </div>
    <div class="infoBox">
      <div class="metric-text">
        UV index
        <div
          class="uv-index"
          id="uvColor"
          :style="{ fontSize: '1em', color: uvIndexColor }"
        >
          {{ uvIndexText }}
        </div>
        <span class="metric-number"> {{ data.UV }} </span>
      </div>
    </div>
  </div>
</template>

<script>
import { watch, ref } from "vue";

export default {
  props: {
    data: {
      type: Object,
      default: () => null,
    },
  },
  setup(props) {
    const uvIndexText = ref("Low");
    const uvIndexColor = ref("#32EB4A");

    const checkUV = () => {
      if (props.data.UV >= 0 && props.data.UV <= 2) {
        uvIndexText.value = "Low";
        uvIndexColor.value = "#32EB4A";
      } else if (props.data.UV >= 3 && props.data.UV <= 5) {
        uvIndexText.value = "Moderate";
        uvIndexColor.value = "#FFB270";
      } else if (props.data.UV >= 6 && props.data.UV <= 7) {
        uvIndexText.value = "High";
        uvIndexColor.value = "#FF3333";
      } else {
        uvIndexText.value = "Very high";
        uvIndexColor.value = "#CC00CC";
      }
    };

    watch(
      () => props.data.UV,
      () => {
        checkUV();
      },
      { immediate: true }
    );

    return {
      uvIndexColor,
      uvIndexText,
    };
  },
};
</script>
