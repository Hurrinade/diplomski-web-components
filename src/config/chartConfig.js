// Set data, labels from backend
function setupChart(setup) {
  const data = {
    labels: setup.labels,
    datasets: [
      {
        label: "Vrapce",
        borderColor: "#889ce7",
        data: setup.chartData.vrapce,
        pointRadius: setup.pointRadius,
        pointBorderColor: "#889ce7",
      },
      {
        label: "Mlinovi",
        borderColor: "#fd6262",
        data: setup.chartData.mlinovi,
        pointRadius: setup.pointRadius,
        pointBorderColor: "#fd6262",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        borderWidth: setup.lineWidth,
      },
    },
    scales: {
      x: {
        display: setup.displayAxis,
        grid: {
          color: "#2e3032",
        },
        ticks: {
          callback: function (val, index) {
            return index % 4 === 0 ? this.getLabelForValue(val) : "";
          },
          maxRotation: 0,
          minRotation: 0,
          color: "#a0a0a0",
        },
      },
      y: {
        grid: {
          color: "#2e3032",
        },
        ticks: {
          color: "#a0a0a0",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#a0a0a0",
          usePointStyle: true,
          pointStyle: "line",
          font: {
            size: 13,
          },
        },
      },
      title: {
        display: true,
        text: setup.titleText,
        color: "#a0a0a0",
        font: {
          size: 14,
        },
      },
    },
  };

  return {
    data,
    options,
  };
}

export { setupChart };
