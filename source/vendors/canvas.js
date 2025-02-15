var canvas;
var context;
var screenH;
var screenW;
var stars = [];
var fps = 60;
var numStars = 3000;

document.addEventListener('DOMContentLoaded', function() {
  // Получаем канвас и контекст
  canvas = document.querySelector('.space');
  context = canvas.getContext('2d');

  // Функция для установки размеров канваса
  function setCanvasSize() {
    screenH = window.innerHeight;
    screenW = window.innerWidth;
    canvas.height = screenH;
    canvas.width = screenW;
  }

  // Устанавливаем размер канваса при загрузке страницы
  setCanvasSize();

  // Обновляем размеры канваса при изменении размера окна
  window.addEventListener('resize', function() {
    setCanvasSize();
  });

  // Создаем все звезды
  for (var i = 0; i < numStars; i++) {
    var x = Math.round(Math.random() * screenW);
    var y = Math.round(Math.random() * screenH);
    var length = 1 + Math.random() * 2;
    var opacity = Math.random();

    // Создаем новую звезду и добавляем её в массив
    var star = new Star(x, y, length, opacity);
    stars.push(star);
  }

  // Запускаем анимацию
  setInterval(animate, 1000 / fps);
});

/**
 * Анимация канваса
 */
function animate() {
  context.clearRect(0, 0, screenW, screenH);
  stars.forEach(function(star) {
    star.draw(context);
  });
}

/**
 * Конструктор для звезды
 *
 * @param int x
 * @param int y
 * @param int length
 * @param opacity
 */
function Star(x, y, length, opacity) {
  this.x = parseInt(x);
  this.y = parseInt(y);
  this.length = parseInt(length);
  this.opacity = opacity;
  this.factor = 1;
  this.increment = Math.random() * 0.03;
}

/**
 * Метод для рисования звезды
 *
 * @param context
 */
Star.prototype.draw = function() {
  context.rotate(Math.PI * 1 / 10);

  // Сохраняем контекст
  context.save();

  // Перемещаем начало координат в точку звезды
  context.translate(this.x, this.y);

  // Изменяем прозрачность звезды
  if (this.opacity > 1) {
    this.factor = -1;
  } else if (this.opacity <= 0) {
    this.factor = 1;
    this.x = Math.round(Math.random() * screenW);
    this.y = Math.round(Math.random() * screenH);
  }

  this.opacity += this.increment * this.factor;

  // Рисуем звезду
  context.beginPath();
  for (var i = 5; i--;) {
    context.lineTo(0, this.length);
    context.translate(0, this.length);
    context.rotate(Math.PI * 2 / 10);
    context.lineTo(0, -this.length);
    context.translate(0, -this.length);
    context.rotate(-(Math.PI * 6 / 10));
  }
  context.lineTo(0, this.length);
  context.closePath();
  context.fillStyle = "rgba(255, 255, 255, " + this.opacity + ")";
  context.shadowBlur = 5;
  context.shadowColor = '#ffffff';
  context.fill();

  // Восстанавливаем контекст
  context.restore();
}
