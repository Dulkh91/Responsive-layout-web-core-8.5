
let btnTongles = false;
let btn = document.getElementById("tongleBtn");
let txtValue = document.getElementById("btnTxt");
let cards = document.querySelector(".cards");
let swiperInstance;

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

// Toggle Button Logic
btn.addEventListener("click", () => {
  if (!btnTongles) {
    btnTongles = true;
    txtValue.innerHTML = "Hide";
    document.getElementById("btnRow").style.transform = "rotate(-90deg)";

    cards.insertAdjacentHTML("beforeend", newCard);
  } else {
    btnTongles = false;
    txtValue.innerHTML = "Show All";
    document.getElementById("btnRow").style.transform = "rotate(90deg)";
    const toggleCard = cards.querySelectorAll(".addCard");
    toggleCard.forEach((cardAdd) => cardAdd.remove());
  }
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
              el: ".swiper-pagination",
              clickable: true,
            },
          });
    }
  }else{
    
    cards.classList.remove("swiper-wrapper");
    card.forEach((item) => item.classList.remove("swiper-slide"));

    // Destroy Swiper Instance
    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }
  }
}
window.onload = widthOfScreen;
window.onresize = widthOfScreen;