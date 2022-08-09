function totalBirdCount(birdsPerDay) {
  let sum = 0;
  let days = birdsPerDay.length;
  for (let i = 0; i < days; i++) {
    sum += birdsPerDay[i];
  }
  return sum;
}

function birdsInWeek(birdsPerDay, week) {
  const starDay = (week - 1) * 7;
  const endDay = starDay + 7;

  let count = 0;

  for (let i = starDay; i < endDay; i++) {
    count += birdsPerDay[i];
  }

  return count;
}

function fixBirdCountLog(birdsPerDay) {
  const days = birdsPerDay.length;

  for (let i = 0; i < days; i += 2) {
    birdsPerDay[i] += 1;
  }

  return birdsPerDay;
}
