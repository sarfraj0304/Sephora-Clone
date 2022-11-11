import { navbar } from "../components/navbar.js";

const header = document.getElementById("header");
header.innerHTML = navbar();

// product 1 data fetching starts

let fetch_image_slide_skincare_data = async () => {
  let res = await fetch("http://localhost:3000/skincare");

  let data = await res.json();
  append_product_1_slide_data(data);
};

let append_product_1_slide_data = (data) => {
  const product_1_caraousal_id = document.getElementById(
    "product_1_caraousal_id"
  );
  product_1_caraousal_id.innerHTML = null;
  data.forEach((el) => {
    if (el.active == true) {
      const slider_box = document.createElement("div");
      const slider_image = document.createElement("img");
      slider_image.src = el.image;
      slider_image.draggable = false;
      const title = document.createElement("h6");
      title.textContent = el.productName;
      const description = document.createElement("p");
      description.textContent = el.description;
      slider_box.onclick = () => {
        product_1_info_fun(el);
      };
      slider_box.append(slider_image, title, description);
      product_1_caraousal_id.append(slider_box);
    }
  });
};

const product_1_info_fun = (el) => {
  console.log(el);
};

fetch_image_slide_skincare_data();
// product 1 data fetching ends

// product 2 data fetching starts

let fetch_image_slide_Fragrance_data = async () => {
  let res = await fetch("http://localhost:3000/Fragrance");

  let data = await res.json();
  append_product_2_slide_data(data);
};

let append_product_2_slide_data = (data) => {
  const product_1_caraousal_id = document.getElementById(
    "product_2_caraousal_id"
  );
  product_1_caraousal_id.innerHTML = null;
  data.forEach((el) => {
    if (el.active == true) {
      const slider_box = document.createElement("div");
      const slider_image = document.createElement("img");
      slider_image.src = el.image;
      slider_image.draggable = false;
      const title = document.createElement("h6");
      title.textContent = el.productName;
      const description = document.createElement("p");
      description.textContent = el.description;
      slider_box.onclick = () => {
        product_2_info_fun(el);
      };
      slider_box.append(slider_image, title, description);
      product_1_caraousal_id.append(slider_box);
    }
  });
};
const product_2_info_fun = (el) => {
  console.log(el);
};

fetch_image_slide_Fragrance_data();
// product 2 data fetching ends

// product 3 data fetching starts

let fetch_image_slide_hair_data = async () => {
  let res = await fetch("http://localhost:3000/hair");

  let data = await res.json();
  append_product_3_slide_data(data);
};

let append_product_3_slide_data = (data) => {
  const product_1_caraousal_id = document.getElementById(
    "product_3_caraousal_id"
  );
  product_1_caraousal_id.innerHTML = null;
  data.forEach((el) => {
    if (el.active == true) {
      const slider_box = document.createElement("div");
      const slider_image = document.createElement("img");
      slider_image.src = el.image;
      slider_image.draggable = false;
      const title = document.createElement("h6");
      title.textContent = el.productName;
      const description = document.createElement("p");
      description.textContent = el.description;
      const signAccess = document.createElement("button");
      signAccess.textContent = "Sign In to Access";
      slider_box.onclick = () => {
        product_3_info_fun(el);
      };
      slider_box.append(slider_image, title, description, signAccess);
      product_1_caraousal_id.append(slider_box);
    }
  });
};
const product_3_info_fun = (el) => {
  console.log(el);
  localStorage.setItem("wind", JSON.stringify(el.id));
  window.location.href = "detail.html";
};

fetch_image_slide_hair_data();
// product 3 data fetching ends

// image slider part starts
{
  const caraousal = document.querySelector(".caraousal");
  let firstImg = caraousal.querySelectorAll("img")[0];
  let arrowIcons = document.querySelectorAll(".wrapper ion-icon");
  let isDragStart = false,
    prevPageX,
    prevScrollLeft;

  const showHideIcons = () => {
    let scrollWidth = caraousal.scrollWidth - caraousal.clientWidth;
    arrowIcons[0].style.display = caraousal.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display =
      caraousal.scrollLeft == scrollWidth ? "none" : "block";
  };
  arrowIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      let firstImgWidth = firstImg.clientWidth + 200;
      caraousal.scrollLeft +=
        icon.id == "left" ? -firstImgWidth : firstImgWidth;
      setTimeout(() => {
        showHideIcons();
      }, 60);
    });
  });
  const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = caraousal.scrollLeft;
  };
  const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    caraousal.classList.add("dragging");
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    caraousal.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
  };
  const dragEnd = () => {
    isDragStart = false;
    caraousal.classList.remove("dragging");
  };

  caraousal.addEventListener("mousedown", dragStart);
  caraousal.addEventListener("touchstart", dragStart);

  caraousal.addEventListener("mousemove", dragging);
  caraousal.addEventListener("touchmove", dragging);

  caraousal.addEventListener("mouseup", dragEnd);
  caraousal.addEventListener("mouseleave", dragEnd);
  caraousal.addEventListener("touchend", dragEnd);
}
// image slide parts ends

// product slider parts start
// product 1 slider
{
  const caraousal = document.querySelector(".product_1_caraousal");
  let firstImg = caraousal.querySelectorAll("img")[0];

  let arrowIcons = document.querySelectorAll(".product_1_wrapper ion-icon");
  let isDragStart = false,
    prevPageX,
    prevScrollLeft;

  const showHideIcons = () => {
    let scrollWidth = caraousal.scrollWidth - caraousal.clientWidth;
    arrowIcons[0].style.display = caraousal.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display =
      caraousal.scrollLeft == scrollWidth ? "none" : "block";
  };
  arrowIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      let firstImgWidth = firstImg.clientWidth + 1248;
      caraousal.scrollLeft +=
        icon.id == "left" ? -firstImgWidth : firstImgWidth;
      setTimeout(() => {
        showHideIcons();
      }, 60);
    });
  });
  const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = caraousal.scrollLeft;
  };
  const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    caraousal.classList.add("dragging");
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    caraousal.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
  };
  const dragEnd = () => {
    isDragStart = false;
    caraousal.classList.remove("dragging");
  };

  caraousal.addEventListener("mousedown", dragStart);
  caraousal.addEventListener("touchstart", dragStart);

  caraousal.addEventListener("mousemove", dragging);
  caraousal.addEventListener("touchmove", dragging);

  caraousal.addEventListener("mouseup", dragEnd);
  caraousal.addEventListener("mouseleave", dragEnd);
  caraousal.addEventListener("touchend", dragEnd);
}
// product 2 slider
{
  const caraousal = document.querySelector(".product_2_caraousal");
  let firstImg = caraousal.querySelectorAll("img")[0];

  let arrowIcons = document.querySelectorAll(".product_2_wrapper ion-icon");
  let isDragStart = false,
    prevPageX,
    prevScrollLeft;

  const showHideIcons = () => {
    let scrollWidth = caraousal.scrollWidth - caraousal.clientWidth;
    arrowIcons[0].style.display = caraousal.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display =
      caraousal.scrollLeft == scrollWidth ? "none" : "block";
  };
  arrowIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      let firstImgWidth = firstImg.clientWidth + 1248;
      caraousal.scrollLeft +=
        icon.id == "left" ? -firstImgWidth : firstImgWidth;
      setTimeout(() => {
        showHideIcons();
      }, 60);
    });
  });
  const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = caraousal.scrollLeft;
  };
  const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    caraousal.classList.add("dragging");
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    caraousal.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
  };
  const dragEnd = () => {
    isDragStart = false;
    caraousal.classList.remove("dragging");
  };

  caraousal.addEventListener("mousedown", dragStart);
  caraousal.addEventListener("touchstart", dragStart);

  caraousal.addEventListener("mousemove", dragging);
  caraousal.addEventListener("touchmove", dragging);

  caraousal.addEventListener("mouseup", dragEnd);
  caraousal.addEventListener("mouseleave", dragEnd);
  caraousal.addEventListener("touchend", dragEnd);
}
// product 3 slider
{
  const caraousal = document.querySelector(".product_3_caraousal");
  let firstImg = caraousal.querySelectorAll("img")[0];

  let arrowIcons = document.querySelectorAll(".product_3_wrapper ion-icon");
  let isDragStart = false,
    prevPageX,
    prevScrollLeft;

  const showHideIcons = () => {
    let scrollWidth = caraousal.scrollWidth - caraousal.clientWidth;
    arrowIcons[0].style.display = caraousal.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display =
      caraousal.scrollLeft == scrollWidth ? "none" : "block";
  };
  arrowIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      let firstImgWidth = firstImg.clientWidth + 1248;
      caraousal.scrollLeft +=
        icon.id == "left" ? -firstImgWidth : firstImgWidth;
      setTimeout(() => {
        showHideIcons();
      }, 60);
    });
  });
  const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = caraousal.scrollLeft;
  };
  const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    caraousal.classList.add("dragging");
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    caraousal.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
  };
  const dragEnd = () => {
    isDragStart = false;
    caraousal.classList.remove("dragging");
  };

  caraousal.addEventListener("mousedown", dragStart);
  caraousal.addEventListener("touchstart", dragStart);

  caraousal.addEventListener("mousemove", dragging);
  caraousal.addEventListener("touchmove", dragging);

  caraousal.addEventListener("mouseup", dragEnd);
  caraousal.addEventListener("mouseleave", dragEnd);
  caraousal.addEventListener("touchend", dragEnd);
}
// product slider parts ends
