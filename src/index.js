
import { bar } from "./mainBar";
import { homeBody } from "./home";
import { menuBody } from "./menu";
import { contactBody } from "./contact";



const parent = document.querySelector("#content");
const navigationBar = bar();  // Create the navigation bar

parent.appendChild(navigationBar.div);
const menu = menuBody();
const home = homeBody();
const contact = contactBody();
parent.appendChild(home);
navigationBar.home.classList.add("selected");

const removeChildIfExists = (child) => {
    if (parent.contains(child)) {
        parent.removeChild(child);
    }
};

navigationBar.home.addEventListener("click", () => {
    removeChildIfExists(menu);
    navigationBar.menu.classList.remove("selected");
    removeChildIfExists(contact);
    navigationBar.contact.classList.remove("selected");
    if (!parent.contains(home)) {
        parent.appendChild(home);
        navigationBar.home.classList.add("selected");
    }
});

navigationBar.menu.addEventListener("click", () => {
    removeChildIfExists(home);
    navigationBar.home.classList.remove("selected");
    removeChildIfExists(contact);
    navigationBar.contact.classList.remove("selected");
    if (!parent.contains(menu)) {
        parent.appendChild(menu);
        navigationBar.menu.classList.add("selected");

    }
});

navigationBar.contact.addEventListener("click", () => {
    removeChildIfExists(menu);
    navigationBar.menu.classList.remove("selected");
    removeChildIfExists(home);
    navigationBar.home.classList.remove("selected");
    if (!parent.contains(contact)) {
        parent.appendChild(contact);
        navigationBar.contact.classList.add("selected");

    }
});