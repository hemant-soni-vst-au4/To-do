import body from './body'
const headerNav = document.querySelector('#header__nav');

const header = () => {
let nav = headerNav.appendChild(document.createElement("nav"));
nav.setAttribute("class", "navbar navbar-expand-lg navbar-dark text-light")
let navA = nav.appendChild(document.createElement("a"))
navA.setAttribute("class", "navbar-brand");
document.querySelector(".navbar-brand").setAttribute("href", "#");
let navAi= document.querySelector(".navbar-brand").appendChild(document.createElement("i"))
navAi.setAttribute("class","fas fa-check-double");
let nav_button = nav.appendChild(document.createElement("button"))
nav_button.setAttribute("class", "navbar-toggler");
nav_button.setAttribute("data-toggle", "collapse");
nav_button.setAttribute("data-target", "#navbarTogglerDemo02");
nav_button.setAttribute("aria-controls", "navbarTogglerDemo02");
nav_button.setAttribute("aria-expanded", "false");
nav_button.setAttribute("aria-label", "Toggle navigation");
nav_button.appendChild(document.createElement("span")).setAttribute("class", "navbar-toggler-icon")

let nav_div = nav.appendChild(document.createElement("div"))
nav_div.setAttribute("class","collapse navbar-collapse");
nav_div.setAttribute("id","navbarTogglerDemo02");
let nav_div_ul = nav_div.appendChild(document.createElement("ul"));
nav_div_ul.setAttribute("class", "navbar-nav mr-auto mt-2 mt-lg-0");
let nav_div_ul_li = nav_div_ul.appendChild(document.createElement("li"))
nav_div_ul_li.setAttribute("class", "nav-item active");
let nav_div_ul_li_a = nav_div_ul_li.appendChild(document.createElement("a"));
nav_div_ul_li_a.setAttribute("class","nav-link pt-3")
nav_div_ul_li_a.setAttribute("href","#")
nav_div_ul_li_a.appendChild(document.createElement("i")).setAttribute("class", "fa fa-fw fa-home");

let nav_div_ul_li1 = nav_div_ul.appendChild(document.createElement("li"))
nav_div_ul_li1.setAttribute("class", "nav-item");
let nav_div_ul_li1_a = nav_div_ul_li1.appendChild(document.createElement("a"));
nav_div_ul_li1_a.setAttribute("class","nav-link")
nav_div_ul_li1_a.setAttribute("href","#")
let nav_div_ul_li1_a_input = nav_div_ul_li1_a.appendChild(document.createElement("input"))
nav_div_ul_li1_a_input.setAttribute("class", "form-control mr-sm-2");
nav_div_ul_li1_a_input.setAttribute("type", "search");
nav_div_ul_li1_a_input.setAttribute("placeholder", "Search");

let nav_div_div = nav_div.appendChild(document.createElement("div"));
nav_div_div.setAttribute("class", "my-2 my-lg-0");
let nav_div_div_i = nav_div_div.appendChild(document.createElement("i"));
nav_div_div_i.setAttribute("class", "fas fa-plus mr-1 mx-2");
nav_div_div_i.setAttribute("role", "button");

let nav_div_div_span = nav_div_div.appendChild(document.createElement("span"));
nav_div_div_span.setAttribute("class", "mx-2");
nav_div_div_span.innerText = "All List"
nav_div_div_span.appendChild(document.createElement("i")).setAttribute("class", "fa fa-fw fa-list-ul mr-2")


let nav_div_div_span1 = nav_div_div.appendChild(document.createElement("span"));
nav_div_div_span1.setAttribute("class", "mx-2");
nav_div_div_span1.innerText = "Login"
nav_div_div_span1.appendChild(document.createElement("i")).setAttribute("class", "fa fa-fw fa-user mr-2")




}

header()
body()





