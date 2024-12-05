// Можливі відповіді
const answers = [
  'Так',
  'Ні',
  'Можливо',
  'Запитай пізніше',
  'Майже точно',
  'Сумнівно',
  'Залежить від Вас',
  'Здається, так'
];

// Функція для отримання випадкової відповіді
function getRandomAnswer() {
  const randomIndex = Math.floor(Math.random() * answers.length);
  return answers[randomIndex];
}

// Створення елементів
const container = document.createElement('div');
container.classList.add('container');

const inputContainer = document.createElement('div');
inputContainer.classList.add('input-container');

const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Введіть ваше питання тут';
input.classList.add('question-input');

const ball = document.createElement('div');
ball.classList.add('ball');
ball.innerText = 'Сформулюйте питання та натисніть кнопку';

const button = document.createElement('button');
button.classList.add('button');
button.innerText = 'Отримати відповідь';

// Додавання події для генерації нової відповіді при натисканні кнопки
button.addEventListener('click', () => {
  const userQuestion = input.value.trim();
  if (userQuestion) {
    ball.innerText = getRandomAnswer();
  } else {
    ball.innerText = 'Будь ласка, введіть питання.';
  }
});

// Додавання елементів до контейнера
inputContainer.appendChild(input);
inputContainer.appendChild(button);
container.appendChild(inputContainer);
container.appendChild(ball);

// Додавання контейнера до body
document.body.appendChild(container);
