const feedbackList = document.querySelector(".swiper-wrapper");

feedbackData.forEach((feedback) => {
  const li = document.createElement("li");
  li.classList.add("swiper-slide");
  li.innerHTML = `
    <div class="card">
      <p class="quote">"${feedback.text}"</p>
      <div class="author">
        <img src="${feedback.avatar}" alt="${feedback.name}" class="avatar" />
        <div>
          <p class="name">${feedback.name}</p>
          <p class="role">${feedback.role}</p>
        </div>
      </div>
    </div>
  `;
  feedbackList.appendChild(li);
});

const swiper = new Swiper(".feedback-swiper", {
  spaceBetween: 24,
  slidesPerView: 1,
  slidesPerGroup: 1,
  allowTouchMove: true,
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
  keyboard: { enabled: true },
  a11y: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0, // або 16 для легкого відступу
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 24,
    },
    1440: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 24,
    },
  },
  on: {
    init: () => updateActiveDot(0),
    slideChange: () => {
      const groupIndex = Math.floor(
        swiper.activeIndex / swiper.params.slidesPerGroup
      );
      updateActiveDot(groupIndex);
    },
  },
});

document.querySelectorAll(".dot").forEach((dot, i) => {
  dot.addEventListener("click", () => {
    swiper.slideTo(i * swiper.params.slidesPerGroup);
  });
});

function updateActiveDot(activeIndex) {
  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === activeIndex);
  });
}
