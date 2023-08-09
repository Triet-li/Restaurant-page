
function homeBody() {
    const div = document.createElement("div");
    div.classList.add("home-body");

    const headline = document.createElement("h1");
    headline.textContent = "Best place for Best breads";

    const des = document.createElement("p");
    des.textContent = "Here, we only sell breads that are chosen from many countries that are considered excellent like banh mi Viet Nam, and Doner - Kebab, etc... We keep these taste as close as possible and we have chefs specificially from that countries to make their home town bread";

    div.appendChild(headline);
    div.appendChild(des);

    return div;
}

export { homeBody }