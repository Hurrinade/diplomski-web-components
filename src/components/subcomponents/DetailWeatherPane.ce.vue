<template>
  <div class="weatherDetailedData">
    <div class="detailedInfoBox">
      <section>
        <div class="section-name">Position</div>
        <div class="section-data">
          <div class="section-text">
            Elevation:
            <div class="section-real-data">{{ data.Elevation }}</div>
          </div>
          <div class="section-text">
            Pressure:
            <div class="section-real-data">{{ data.Pressure }}</div>
          </div>
        </div>
      </section>
      <section>
        <div class="section-name">Temperature</div>
        <div class="section-data">
          <div class="section-text">
            Temperature:
            <div class="section-real-data">{{ data.Temperature }}</div>
          </div>
          <div class="section-text">
            Temperature feels like:
            <div class="section-real-data">{{ data.HeatIndex }}</div>
          </div>
          <div class="section-text">
            Solar radiation:
            <div class="section-real-data">
              {{ data.SolarRadiation }}
            </div>
          </div>
          <div class="section-text">
            UV index:
            <div class="section-real-data">{{ data.UV }}</div>
          </div>
        </div>
      </section>
      <section>
        <div class="section-name">Wind</div>
        <div class="section-wind-data">
          <div class="wind-data">
            <div class="section-text">
              Wind speed:
              <div class="section-real-data">{{ data.WindSpeed }}</div>
            </div>
            <div class="section-text">
              Wind gust:
              <div class="section-real-data">{{ data.WindGust }}</div>
            </div>
            <div class="section-text">
              Wind chill:
              <div class="section-real-data">{{ data.WindChill }}</div>
            </div>
            <div class="section-text">
              Wind direction:
              <div class="section-real-data">{{ data.WindDirection }} deg.</div>
            </div>
          </div>
          <div class="windAnimationArrow">
            <div class="windIcon">
              <img
                class="windCircle"
                src="../../../assets/images/circle.png"
                alt=""
              />
              <img
                id="windArrowMlinovi"
                className="windArrow"
                src="../../../assets/images/wind_arrow.png"
                alt=""
                :style="{
                  transform: 'rotate(' + data.WindDirection + 'deg)',
                }"
              />
            </div>
            <p class="windDirection">{{ data.WindSide }}</p>
          </div>
        </div>
      </section>
      <section>
        <div class="section-name">Water</div>
        <div class="section-data">
          <div class="section-text">
            Precipation rate:
            <div class="section-real-data">
              {{ data.PrecipationTotal }}
            </div>
          </div>
          <div class="section-text">
            Daily precipation:
            <div class="section-real-data">
              {{ data.PrecipationRate }}
            </div>
          </div>
          <div class="section-text">
            Humidity:
            <div class="section-real-data">{{ data.Humidity }}</div>
          </div>
          <div class="section-text">
            dewpt:
            <div class="section-real-data">{{ data.DewPoint }}</div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => null,
    },
  },
  setup() {},
};
</script>
