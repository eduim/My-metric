function getAverage(data, timeAgg) {
  const result = {};

  data.forEach((obj) => {
    let createdAt;

    switch (timeAgg) {
      case "hour":
        createdAt = roundToHour(obj.createdAt);
        break;
      case "minute":
        createdAt = roundToMinute(obj.createdAt);
        break;
      case "day":
        createdAt = roundToDay(obj.createdAt);
        break;
    }

    if (!result[createdAt]) {
      result[createdAt] = {
        createdAt,
        totalAmount: 0,
        count: 0,
        average: 0,
      };
    }

    result[createdAt].totalAmount += parseInt(obj.value);
    result[createdAt].count += 1;

    result[createdAt].average =
      Math.round(
        (result[createdAt].totalAmount / result[createdAt].count) * 100
      ) / 100;
  });

  const sortedResult = Object.values(result).sort(
    (a, b) => a.createdAt - b.createdAt
  );

  var options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const dataTransformed = sortedResult.map((obj) => {
    return {
      date: obj.createdAt.toLocaleString("en-EU", options),
      value: obj.average,
    };
  });

  return dataTransformed;
}

export default getAverage;

function roundToHour(date) {
  date.setMilliseconds(0);
  date.setSeconds(0);
  date.setMinutes(0);
  date.setHours(Math.round(date.getHours() + date.getMinutes() / 60));
  return date;
}

function roundToMinute(date) {
  date.setMilliseconds(0);
  date.setSeconds(Math.round(date.getSeconds() / 60) * 60);
  return date;
}

function roundToDay(date) {
  date.setMilliseconds(0);
  date.setSeconds(0);
  date.setMinutes(0);
  date.setHours(0);
  date.setDate(Math.round(date.getDate() + date.getHours() / 24));
  return date;
}
