// Set data, labels from backend
function setupChart(titleText, chartData, labels) {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Vrapce",
        borderColor: "#889ce7",
        data: chartData.vrapce,
        pointRadius: 2,
        pointBorderColor: "#889ce7",
      },
      {
        label: "Mlinovi",
        borderColor: "#fd6262",
        data: chartData.mlinovi,
        pointRadius: 2,
        pointBorderColor: "#fd6262",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: "#2e3032",
        },
        ticks: {
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
        text: titleText,
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
