<template>
  <div v-if="chart.data" class="chart-container">
    <Line :data="chart.data" :options="chart.options" height="500px" />
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ref, onUnmounted } from "vue";
import { Line } from "vue-chartjs";
import { setupChart } from "../config/chartConfig.js";
import { mapData } from "../helpers/chartMapping";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  components: {
    Line,
  },
  props: {
    // temperature, windspeed, precipation, humidity
    chartType: {
      type: String,
      default: "",
    },
  },
  emits: ["chart"],
  setup(props) {
    // Display data for last 5 days, while big chart will for last 10 days
    const chart = ref({});
    let eventSource;

    const startSse = async () => {
      if (!props.chartType) {
        return;
      }

      eventSource = new EventSource("http://localhost:8080/v1/chartData");

      eventSource.addEventListener("open", (data) => {
        console.debug("Event source opened for chart buttons");
      });

      eventSource.addEventListener("data", (event) => {
        const eventData = JSON.parse(event.data);
        if (eventData.error) {
          console.warn(eventData.notice);
          return;
        }

        const chartData = mapData(props.chartType, eventData.data);

        chart.value = setupChart({
          titleText: `${props.chartType
            .charAt(0)
            .toUpperCase()}${props.chartType.slice(1)} chart`,
          chartData: {
            vrapce: chartData.vrapce,
            mlinovi: chartData.mlinovi,
          },
          labels: chartData.dates,
          lineWidth: 2,
          pointRadius: 1,
        });
      });

      eventSource.addEventListener("error", (err) => {
        eventSource.close();
      });
    };

    startSse();

    onUnmounted(() => {
      eventSource.close();
    });

    return {
      chart,
    };
  },
};
</script>

<style>
@import "../../assets/css/chart.css";
</style>
