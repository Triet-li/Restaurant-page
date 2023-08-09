


function contactBody() {
    const div = document.createElement("div");
    div.classList.add("contact");

    const h2 = document.createElement("h2");
    h2.textContent = "Contact us";

    const phoneNum = document.createElement("p");
    phoneNum.textContent = "(449) 1012- 222";
    const e_address = document.createElement("p");
    e_address.textContent = "BestBread@gmail.com";
    const address = document.createElement("p");
    address.textContent = "24 Apolo district VN";
    const hour = document.createElement("p");
    hour.textContent = "Open: Mon to Sun from 7am to 11pm";

    div.appendChild(h2);
    div.appendChild(phoneNum);
    div.appendChild(e_address);
    div.appendChild(address);
    div.appendChild(hour);

    return div;
}

export { contactBody }