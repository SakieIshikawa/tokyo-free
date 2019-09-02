'use strict';

const question = document.getElementById('question-list');
const answer = document.getElementById('answer');
const minus = document.getElementsByClassName('minus-icon');
const plus = document.getElementsByClassName('plus-icon');

question.addEventListener('click', () => {
  answer.classList.toggle('is-open');

});


$(".accordion li a").on("click", function () {
  $(this).next().slideToggle();
  // activeが存在する場合
  if ($(this).children(".accordion_icon").hasClass('active')) {
    // activeを削除
    $(this).children(".accordion_icon").removeClass('active');
  }
  else {
    // activeを追加
    $(this).children(".accordion_icon").addClass('active');
  }
});
