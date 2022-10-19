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

//Функция для проверки максимальной длины строки
function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

checkStringLength('Meow', 150);

//Функции от Кекса, возвращающая случайное целое число из переданного диапазона включительно
function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const NAMES = [
  'Андрей',
  'Мария',
  'Петр',
  'Кирилл',
  'Алиса',
  'Юлия',
  'Валентина',
  'Катерина',
];

const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const description = 'Какое-то красноречивое описание для фотографии';

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const generateMessage = () => getRandomArrayElement(message);

const generateComments = () => {
  const commentId = getRandomPositiveInteger (1, 100);
  const avatarText = `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`;
  const messageText = Array.from({length: getRandomPositiveInteger (1, 2)}, generateMessage);
  const userName = getRandomArrayElement(NAMES);

  return {
    id: commentId,
    avatar: avatarText,
    message: messageText,
    name: userName,
  };
};

const generatePhotoDesc = () => {
  const photoId = getRandomPositiveInteger (1, 25);
  const urlText = `photos/${getRandomPositiveInteger(1, 25)}.jpg`;
  const likesValue = getRandomPositiveInteger (15, 200);
  const totalComments = Array.from({length: getRandomPositiveInteger (1, 5)}, generateComments);

  return {
    id: photoId,
    url: urlText,
    description: description,
    likes: likesValue,
    comments: totalComments,
  };
};

const photoDescription = Array.from({length:25}, generatePhotoDesc);

// eslint-disable-next-line no-console
console.log(photoDescription);
