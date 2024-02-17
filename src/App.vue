<template>
  <div class="main container">
    <!-- <chart-component :chartType.prop="'temperature'" /> -->
    <div class="main-panes">
      <!-- <data-pane :location.prop="'Vrapce'" /> -->
      <!-- <chart-buttons @chart="openChart" /> -->
      <data-pane :location.prop="'Mlinovi'" />
      <!-- <radars-pane /> -->
    </div>
    <!-- <forecast-pane></forecast-pane>
    <ensi-pane></ensi-pane> -->
  </div>
</template>

<script>
export default {
  setup() {
    const openChart = (emit) => {
      // Chart name (string)
      console.log(emit.detail[0]);
    };

    return {
      openChart,
    };
  },
};
</script>

<style>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.main-panes {
  display: flex;
  gap: 5rem;
  justify-content: center;
  align-items: center;
}

body {
  background-color: black;
}
</style>
