<template>
  <div class="ensi-container">
    <div class="ensi-old" v-for="(ensi, i) of oldENSI">
      <a :key="i" :href="ensi">
        <img :src="ensi" alt="" class="ensi-img" />
      </a>
    </div>
    <div class="ensi-active">
      <a :href="activeENSI">
        <img :src="activeENSI" alt="" class="ensi-img-big" />
      </a>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import { ref } from "vue";

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

export default {
  setup() {
    const oldENSI = ref([]);
    const activeENSI = ref("");
    const calcualteENSIimage = () => {
      oldENSI.value = [];
      activeENSI.value = "";
      const currentTime = dayjs();
      let startTime = dayjs().set("hour", 5).set("minute", 30).set("second", 0);
      let endTime = dayjs().set("hour", 11).set("minute", 30).set("second", 0);

      const todayFormated = currentTime.format("YYYY-MM-DD");
      const yesterdayFormated = currentTime.add(-1, "day").format("YYYY-MM-DD");

      if (
        currentTime.isSameOrAfter(startTime) &&
        currentTime.isSameOrBefore(endTime)
      ) {
        const ensi00 = `https://wetterzentrale.de/en/ens_image.php?geoid=54032&var=201&run=0&date=${todayFormated}&model=gfs&member=ENS&bw=1`;
        const ensi06 = `https://wetterzentrale.de/en/ens_image.php?geoid=54032&var=201&run=6&date=${yesterdayFormated}&model=gfs&member=ENS&bw=1`;
        const ensi12 = `https://wetterzentrale.de/en/ens_image.php?geoid=54032&var=201&run=12&date=${yesterdayFormated}&model=gfs&member=ENS&bw=1`;
        const ensi18 = `https://wetterzentrale.de/en/ens_image.php?geoid=54032&var=201&run=18&date=${yesterdayFormated}&model=gfs&member=ENS&bw=1`;
        oldENSI.value = [ensi06, ensi12, ensi18];
        activeENSI.value = ensi00;
        return;
      }

      startTime = dayjs().set("hour", 11).set("minute", 30).set("second", 0);
      endTime = dayjs().set("hour", 17).set("minute", 30).set("second", 0);

      if (
        currentTime.isSameOrAfter(startTime) &&
        currentTime.isSameOrBefore(endTime)
      ) {
        const ensi00 = `https://wetterzentrale.de/en/ens_image.php?geoid=54032&var=201&run=0&date=${todayFormated}&model=gfs&member=ENS&bw=1`;
        const ensi06 = `https://wetterzentrale.de/en/ens_image.php?geoid=54032&var=201&run=6&date=${todayFormated}&model=gfs&member=ENS&bw=1`;
        const ensi12 = `https://wetterzentrale.de/en/ens_image.php?geoid=54032&var=201&run=12&date=${yesterdayFormated}&model=gfs&member=ENS&bw=1`;
        const ensi18 = `https://wetterzentrale.de/en/ens_image.php?geoid=54032&var=201&run=18&date=${yesterdayFormated}&model=gfs&member=ENS&bw=1`;
        oldENSI.value = [ensi12, ensi18, ensi00];
        activeENSI.value = ensi06;
        return;
      }

      startTime = dayjs().set("hour", 17).set("minute", 30).set("second", 0);
      endTime = dayjs().set("hour", 23).set("minute", 30).set("second", 0);

      if (
        currentTime.isSameOrAfter(startTime) &&
        currentTime.isSameOrBefore(endTime)
      ) {
        const ensi00 = `https://wetterzentrale.de/en/ens_image.php?geoid=54032&var=201&run=0&date=${todayFormated}&model=gfs&member=ENS&bw=1`;
        const ensi06 = `https://wetterzentrale.de/en/ens_image.php?geoid=54032&var=201&run=6&date=${todayFormated}&model=gfs&member=ENS&bw=1`;
        const ensi12 = `https://wetterzentrale.de/en/ens_image.php?geoid=54032&var=201&run=12&date=${todayFormated}&model=gfs&member=ENS&bw=1`;
        const ensi18 = `https://wetterzentrale.de/en/ens_image.php?geoid=54032&var=201&run=18&date=${yesterdayFormated}&model=gfs&member=ENS&bw=1`;
        oldENSI.value = [ensi18, ensi00, ensi06];
        activeENSI.value = ensi12;
        return;
      }

      startTime = dayjs().set("hour", 23).set("minute", 30).set("second", 0);
      endTime = dayjs().set("hour", 5).set("minute", 30).set("second", 0);

      if (
        currentTime.isSameOrAfter(startTime) &&
        currentTime.isSameOrBefore(endTime)
      ) {
        const ensi00 = `https://wetterzentrale.de/en/ens_image.php?geoid=54032&var=201&run=0&date=${todayFormated}&model=gfs&member=ENS&bw=1`;
        const ensi06 = `https://wetterzentrale.de/en/ens_image.php?geoid=54032&var=201&run=6&date=${todayFormated}&model=gfs&member=ENS&bw=1`;
        const ensi12 = `https://wetterzentrale.de/en/ens_image.php?geoid=54032&var=201&run=12&date=${todayFormated}&model=gfs&member=ENS&bw=1`;
        const ensi18 = `https://wetterzentrale.de/en/ens_image.php?geoid=54032&var=201&run=18&date=${todayFormated}&model=gfs&member=ENS&bw=1`;
        oldENSI.value = [ensi00, ensi06, ensi12];
        activeENSI.value = ensi18;
        return;
      }
    };

    calcualteENSIimage();

    return {
      activeENSI,
      oldENSI,
    };
  },
};
</script>

<style>
@import "../../assets/css/ensiPane.css";
</style>
