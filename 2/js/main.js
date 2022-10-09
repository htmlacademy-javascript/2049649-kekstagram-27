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

function getStringComment(currentComment, maxComment) {
  maxComment = Number(maxComment);

  if (isNaN(maxComment)) {
    return false;
  }

  if (maxComment > 140) {
    maxComment = 140;
  }

  if (currentComment.length > maxComment) {
    return false;
  } else {
    return true;
  }
}

getStringComment('Meow', 150);
