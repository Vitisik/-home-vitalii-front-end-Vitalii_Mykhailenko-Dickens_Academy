let currentSlideIndex = 0;

function showSlide(index) {
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;
  const slidesToShow = 2;
  const slidesToScroll = 2;
  const dots = document.querySelectorAll(".dot");

  if (index >= totalSlides / slidesToShow) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = Math.floor(totalSlides / slidesToShow) - 1;
  } else {
    currentSlideIndex = index;
  }

  const offset = -currentSlideIndex * 101.2;
  slides.style.transform = `translateX(${offset}%)`;

  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === currentSlideIndex);
  });
}
function nextSlide() {
  showSlide(currentSlideIndex + 1);
}
function prevSlide() {
  showSlide(currentSlideIndex - 1);
}
function currentSlide(index) {
  showSlide(index);
}
showSlide(currentSlideIndex);
//

document.addEventListener("DOMContentLoaded", () => {
  const aboutMore = document.getElementById("aboutMore");
  const aboutContent = document.getElementById("aboutContent");
  console.log(aboutContent);
  aboutMore.addEventListener("click", () => {
    if (
      aboutContent.style.display === "flex" ||
      aboutContent.style.display === ""
    ) {
      aboutContent.style.display = "none";
    } else {
      aboutContent.style.display = "";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const programOne = document.getElementById("programOne");
  const programWrapOne = document.getElementsByClassName("program_wrap-one");
  const programTwo = document.getElementById("programTwo");
  const programWrapTwo = document.getElementsByClassName("programs_wrap-two");
  const questionButton = document.getElementsByClassName("question_top-button");
  const answerText = document.getElementsByClassName("question_text");

  programOne.addEventListener("click", () => {
    if (
      programWrapOne[0].style.display === "flex" ||
      programWrapOne[0].style.display === ""
    ) {
      programWrapOne[0].style.display = "none";
    } else {
      programWrapOne[0].style.display = "";
    }
  });
  programTwo.addEventListener("click", () => {
    if (
      programWrapTwo[0].style.display === "flex" ||
      programWrapTwo[0].style.display === ""
    ) {
      programWrapTwo[0].style.display = "none";
    } else {
      programWrapTwo[0].style.display = "";
    }
  });

  questionButton[0].addEventListener("click", () => {
    if (
      answerText[0].style.display === "flex" ||
      answerText[0].style.display === ""
    ) {
      answerText[0].style.display = "none";
    } else {
      answerText[0].style.display = "";
    }
  });
  questionButton[1].addEventListener("click", () => {
    if (
      answerText[1].style.display === "flex" ||
      answerText[1].style.display === ""
    ) {
      answerText[1].style.display = "none";
    } else {
      answerText[1].style.display = "";
    }
  });
  questionButton[2].addEventListener("click", () => {
    if (
      answerText[2].style.display === "flex" ||
      answerText[2].style.display === ""
    ) {
      answerText[2].style.display = "none";
    } else {
      answerText[2].style.display = "";
    }
  });
  questionButton[3].addEventListener("click", () => {
    if (
      answerText[3].style.display === "flex" ||
      answerText[3].style.display === ""
    ) {
      answerText[3].style.display = "none";
    } else {
      answerText[3].style.display = "";
    }
  });
});
