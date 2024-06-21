document.addEventListener("DOMContentLoaded", () => {
  let mob_menu = document.getElementById("burger_menu");
  let menu_items = document.getElementById("menu_items");
  let is_open = false;

  mob_menu.addEventListener("click", function () {
    if (!is_open) {
      menu_items.classList.remove("hidden");
      menu_items.classList.add("block");
      is_open = true;
    } else {
      menu_items.classList.remove("block");
      menu_items.classList.add("hidden");
      is_open = false;
    }
  });
  ////////////////////////////////////////////////////////////////
  const counter1 = document.getElementById("counter1");
  const target1 = +counter1.getAttribute("data-target");

  const counter2 = document.getElementById("counter2");
  const target2 = +counter2.getAttribute("data-target");

  const counter3 = document.getElementById("counter3");
  const target3 = +counter3.getAttribute("data-target");

  let started1 = false;
  let started2 = false;
  let started3 = false;

  function countUp(el, target) {
    const increment = target / 50; // Определяем скорость инкрементации
    let current = 0;

    function updateCounter() {
      current += increment;
      if (el.id === "counter3") {
        el.innerText = current.toFixed(1); // Обновляем счетчик с одним знаком после запятой
      } else {
        el.innerText = Math.ceil(current); // Обновляем счетчик целым числом
      }

      if (current < target) {
        requestAnimationFrame(updateCounter);
      } else {
        if (el.id === "counter3") {
          el.innerText = target.toFixed(1); // Финальное значение с одним знаком после запятой
        } else {
          el.innerText = target; // Финальное целое значение
        }
      }
    }

    updateCounter();
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function checkVisibility() {
    if (!started1 && isElementInViewport(counter1)) {
      countUp(counter1, target1);
      started1 = true;
    }
    if (!started2 && isElementInViewport(counter2)) {
      countUp(counter2, target2);
      started2 = true;
    }
    if (!started3 && isElementInViewport(counter3)) {
      countUp(counter3, target3);
      started3 = true;
    }
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // Проверка при загрузке страницы

  ////////////////////////////////////////////////////////////////
  document
    .getElementById("architecture_btn")
    .addEventListener("click", function () {
      changeContent("architecture");
    });
  document
    .getElementById("landscape_btn")
    .addEventListener("click", function () {
      changeContent("landscape");
    });
  document
    .getElementById("interior_btn")
    .addEventListener("click", function () {
      changeContent("interior");
    });
  document.getElementById("design_btn").addEventListener("click", function () {
    changeContent("design");
  });

  function changeContent(type) {
    const imageElement = document.getElementById("content-image");
    const textElement = document.getElementById("content-text");

    switch (type) {
      case "architecture":
        imageElement.style.backgroundImage = "url('./Images/architecture.png')";
        textElement.innerHTML =
          "At the heart of everything we do is the human experience to feel. To love. To image. To wonder. To guide. To jest. To rule. To serve. To belong.";
        break;
      case "landscape":
        imageElement.style.backgroundImage = "url('./Images/landscape.jpg')";
        textElement.innerHTML =
          "Landscape is the creation of living art that changes and grows with time. It encompasses the beauty of nature, the functionality of the environment, and the harmony of space.";
        break;
      case "interior":
        imageElement.style.backgroundImage = "url('./Images/interior.jpg')";
        textElement.innerHTML =
          "Interior design is the art of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment. It involves creating spaces that are both functional and beautiful.";
        break;
      case "design":
        imageElement.style.backgroundImage = "url('./Images/design.jpg')";
        textElement.innerHTML =
          "Design is the process of envisioning and planning the creation of objects, systems, or processes. It is the art of making things better, more functional, and more beautiful.";
        break;
      default:
        imageElement.style.backgroundImage = "url('./Images/architecture.jpg')";
        textElement.innerHTML =
          "At the heart of everything we do is the human experience to feel. To love. To image. To wonder. To guide. To jest. To rule. To serve. To belong.";
    }
  }
});
