function getRandomInt(min, max) {
  if (isNaN(Number(min)) || isNaN(Number(max))) {
    return NaN;
  }

  if (min < 0 || max < 0) {
    return NaN;
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  if (min === max) {
    return NaN;
  }

  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}

getRandomInt(1, 10);

function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

checkStringLength('Meow', 150);
