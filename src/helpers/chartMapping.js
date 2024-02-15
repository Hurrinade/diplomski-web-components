import dayjs from "dayjs";

const mapData = (type, data) => {
  const mappedData = {};
  const dates = [];
  const vrapce = data.vrapceData.map((elem) => {
    return Number(elem[type]);
  });
  const mlinovi = data.mlinoviData.map((elem) => {
    dates.push(dayjs(elem.date).format("DD. MMM / hh:mm"));
    return Number(elem[type]);
  });

  mappedData.vrapce = vrapce;
  mappedData.mlinovi = mlinovi;
  mappedData.dates = dates;
  return mappedData;
};

export { mapData };
