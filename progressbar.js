let circularProgress = document.querySelector(".circular-progress"),
  progressValue = document.querySelector(".progress-value");

let progressStartValue = 1,
  progressEndValue = 25,
  speed = 30;

let progress = setInterval(() => {
  progressStartValue++;

  progressValue.textContent = `462/2568`;
  circularProgress.style.background = `conic-gradient(#ffa116 ${
    progressStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (progressStartValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);
