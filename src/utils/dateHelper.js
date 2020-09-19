var dayjs = require("dayjs");
var utc = require("dayjs/plugin/utc");
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(utc);
dayjs.extend(relativeTime);

export const currentTime = () => {
  return dayjs()
    .utc()
    .format();
};

export const convertToUTC = (t) => {
  return dayjs(t)
    .utc()
    .format();
};

export const getFromNow = (startTime) => {
  return dayjs(startTime).fromNow();
};

export const format = (t) => {
  return dayjs(t).format("DD.MM.YYYY");
};
