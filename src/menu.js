
import bmvn from "./assets/banh-mi-viet-nam.jpg";
import kebab from "./assets/Doner-kebab.jpg";
import kaya from "./assets/banh-mi-nuong-Kaya.jpg";


function menuBody() {
    const div = document.createElement("div");
    div.classList.add("menu");

    const bgMenu = document.createElement("div");
    bgMenu.classList.add("bgMenu");

    const dish1Img = new Image();
    dish1Img.src = bmvn;
    dish1Img.classList.add("img");
    const dish1 = document.createElement("div");
    dish1.classList.add("dish");
    const des1 = document.createElement("p");
    des1.textContent = "This dish has many flavor and you can have it with beaf, pork, pate, eggs, ... It is commonly eaten for breakfast";

    const dish2Img = new Image();
    dish2Img.src = kebab;
    dish2Img.classList.add("img");
    const dish2 = document.createElement("div");
    dish2.classList.add("dish");
    const des2 = document.createElement("p");
    des2.textContent = "A triangle like bread that is combined with pork or sheep, ... from Turkey";

    const dish3Img = new Image();
    dish3Img.src = kaya;
    dish3Img.classList.add("img");
    const dish3 = document.createElement("div");
    dish3.classList.add("dish");
    const des3 = document.createElement("p");
    des3.textContent = "A special soft dish from malaysian with special soup";

    dish1.appendChild(dish1Img);
    dish1.appendChild(des1);
    dish2.appendChild(dish2Img);
    dish2.appendChild(des2);
    dish3.appendChild(dish3Img);
    dish3.appendChild(des3);

    bgMenu.appendChild(dish1);
    bgMenu.appendChild(dish2);
    bgMenu.appendChild(dish3);

    div.appendChild(bgMenu);

    return div;
}

export { menuBody }