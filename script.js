$(document).ready(function () {
  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    });
});

document.addEventListener("DOMContentLoaded", function() {
  const heart = document.querySelector(".heart");
  const mainCard = document.querySelector(".main-content-card");
  const secondCard = document.querySelector(".second-content-card");
  const boxBtn = document.querySelector(".box-btn");
  const closeBtn = document.querySelector(".close-btn");

  heart.addEventListener("click", function() {
    mainCard.style.display = "flex";
  });

  boxBtn.addEventListener("click", function() {
    mainCard.style.display = "none";
    secondCard.style.display = "flex";
  });

  closeBtn.addEventListener("click", function() {
    mainCard.style.display = "none"; 
    secondCard.style.display = "none";
  });

  mainCard.addEventListener("click", function(event) {
    if (event.target === mainCard) {
      mainCard.style.display = "none";
    }
  });

  secondCard.addEventListener("click", function(event) {
    if (event.target === secondCard) {
      secondCard.style.display = "none";
    }
  });
});
