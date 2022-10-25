import {getRandomPositiveInteger, getRandomArrayElement} from './util.js';

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

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTION = 'Какое-то красноречивое описание для фотографии';

const PICTURES = {
  MIN: 1,
  MAX: 25,
};

const LIKE = {
  MIN: 15,
  MAX: 200,
};

const AVATAR = {
  MIN: 1,
  MAX: 6,
};

const COMMENTS = {
  MIN: 1,
  MAX: 5,
};

const RANDOM_OBJECTS = 25; // 25 сгенерированных объектов;
const RANDOM_MESSAGES = {
  MIN: 1,
  MAX: 2,
};

const ID = {
  MIN: 1,
  MAX: 100,
};

const generateMessage = () => getRandomArrayElement(MESSAGES);

const generateComments = () => {
  const commentId = getRandomPositiveInteger (ID.MIN, ID.MAX);
  const avatarText = `img/avatar-${getRandomPositiveInteger(AVATAR.MIN, AVATAR.MAX)}.svg`;
  const messageText = Array.from({length: getRandomPositiveInteger (RANDOM_MESSAGES.MIN, RANDOM_MESSAGES.MAX)}, generateMessage);
  const userName = getRandomArrayElement(NAMES);

  return {
    id: commentId,
    avatar: avatarText,
    message: messageText,
    name: userName,
  };
};

const generatePhotoDesc = () => {
  const photoId = getRandomPositiveInteger (PICTURES.MIN, PICTURES.MAX);
  const urlText = `photos/${getRandomPositiveInteger(PICTURES.MIN, PICTURES.MAX)}.jpg`;
  const likesValue = getRandomPositiveInteger (LIKE.MIN, LIKE.MAX);
  const totalComments = Array.from({length: getRandomPositiveInteger (COMMENTS.MIN, COMMENTS.MAX)}, generateComments);

  return {
    id: photoId,
    url: urlText,
    description: DESCRIPTION,
    likes: likesValue,
    comments: totalComments,
  };
};

const createPhotoDescription = () => Array.from({length:RANDOM_OBJECTS}, generatePhotoDesc);

export {createPhotoDescription};
