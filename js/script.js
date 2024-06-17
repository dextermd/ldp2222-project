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
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
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
  });