export function getTimeFromDate(date) {
  let d = new Date(date);
  let hours = (d.getUTCHours() < 10 ? "0" : "") + d.getUTCHours();
  let minutes = (d.getUTCMinutes() < 10 ? "0" : "") + d.getUTCMinutes();
  return `${hours}:${minutes}`;
}

export function getTimeArrival(date, duration) {
  let d = new Date(date);
  let hoursFromDuration = Math.trunc(duration / 60);
  let minutesFromDuration = duration % 60;
  d.setUTCHours(d.getUTCHours() + hoursFromDuration);
  d.setUTCMinutes(d.getUTCMinutes() + minutesFromDuration);
  let hours = (d.getUTCHours() < 10 ? "0" : "") + d.getUTCHours();
  let minutes = (d.getUTCMinutes() < 10 ? "0" : "") + d.getUTCMinutes();
  return `${hours}:${minutes}`;
}

export function getTimeFromMins(mins) {
  let hours = Math.trunc(mins / 60);
  let minutes = (mins % 60 < 10 ? "0" : "") + (mins % 60);
  return `${hours}ч ${minutes}м`;
}

export function getCountStops(len) {
  if (len > 1) {
    return `${len} пересадки`;
  }
  if (len == 0) {
    return "Без пересадок";
  }
  if (len == 1) {
    return "1 пересадка";
  }
}
