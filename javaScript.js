let btn = document.querySelectorAll("#tongleBtn");
let txtValue = document.querySelectorAll("#btnTxt");
let cards = document.querySelector(".cards");
let swiperInstance, swiperTwo, swiperThree;
const newCard = `
               <div class="swiper-slide addCard">
                        <div class="card">
                            <img src="./image/samsung.png" alt>
                            <div class="card__circle">
                                <span
                                    class="material-symbols-outlined deviceCard__arrow--color">
                                                    arrow_forward_ios
                                </span>
                            </div>
                        </div>
                 </div>     
                 <div class="swiper-slide addCard">
                        <div class="card">
                            <img src="./image/accer.png" alt>
                            <div class="card__circle">
                                <span
                                    class="material-symbols-outlined deviceCard__arrow--color">
                                                    arrow_forward_ios
                                </span>
                            </div>
                        </div>
                    </div>
                    
                <div class="swiper-slide addCard">
                        <div class="card">
                            <img src="./image/lenovo.png" alt>
                            <div class="card__circle">
                                <span
                                    class="material-symbols-outlined deviceCard__arrow--color">
                                                    arrow_forward_ios
                                </span>
                            </div>
                        </div>
                    </div>`;

// Toggle Button Logic & Set value button by index
let btnTongles = Array(btn.length).fill(false);
btn.forEach((e, index) => {

  

  e.addEventListener("click", () => {

    if (!btnTongles[index]) {
      btnTongles[index] = true;

      //update text when click btn
      txtValue[index].innerHTML = "Hide";

      //change event btn when click
      document.querySelectorAll("#btnRow")[index].style.transform =
        "rotate(-90deg)";

      if (index === 0) {
        cards.insertAdjacentHTML("beforeend", newCard);
      }
    } else {
      btnTongles[index] = false;
    
      txtValue[index].innerHTML = "Read more"

      txtValue[index].innerHTML = "Show All";

      // Rotate the clicked button's row back
      document.querySelectorAll("#btnRow")[index].style.transform =
        "rotate(90deg)";

      // Remove cards if this is the first button
      if (index === 0) {
        const toggleCard = cards.querySelectorAll(".addCard");
        toggleCard.forEach((cardAdd) => cardAdd.remove());
      }
    }
  });
});

// Manage Swiper Based on Screen Size
function widthOfScreen() {
  const cards = document.querySelector(".cards");
  const card = document.querySelectorAll(".cards > div");
  const sizeWidth = window.innerWidth;

  if (sizeWidth <= 767) {
    if (!cards.classList.contains("swiper-wrapper")) {
      cards.classList.add("swiper-wrapper");
      card.forEach((item) => item.classList.add("swiper-slide"));
    }
    // Initialize Swiper if not already initialized
    if (!swiperInstance) {
      swiperInstance = new Swiper(".mySwiper", {
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination-one",
          clickable: true,
        },
      });

      swiperTwo = new Swiper(".mySwiperTwo", {
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination-two",
          clickable: true,
        },
      });

      swiperThree = new Swiper(".mySwiperThree", {
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination-three",
          clickable: true,
        },
      });
    }
  } else {
    cards.classList.remove("swiper-wrapper");
    card.forEach((item) => item.classList.remove("swiper-slide"));

    // Destroy Swiper Instance
    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;

      swiperTwo.destroy(true, true);
      swiperTwo = null;

      swiperThree.destroy(true, true);
      swiperThree = null
    }
  }
}
window.onload = widthOfScreen;
window.onresize = widthOfScreen;
