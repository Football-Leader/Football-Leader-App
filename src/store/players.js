import { generateId } from '@/utils/generateId';

const newPlayer = (name) => {
  return {
    id: generateId(),
    name,
  };
};

const players = [
  'Миша Блэк Бразе',
  'Миксер',
  'Темп',
  'Серёга Юниор',
  'Витя Маркс',
  'Костя',
  'Виталя',
  'Железный',
  'Хомячок',
  'Волшебник',
  'Пиф Паф',
  'Валера',
  'Вовати',
  'Вова Энгельс',
  'Серёга Юниор 2',
  'Омар',
].map(p => newPlayer(p));

export default players;
