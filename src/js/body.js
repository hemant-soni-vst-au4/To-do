const section = document.querySelector("#section")

const body = () => {
let section_div = section.appendChild(document.createElement("div"));
section_div.setAttribute("class", "d-flex h-100 bg-light");
let section_div_aside = section_div.appendChild(document.createElement("aside"))
section_div_aside.setAttribute("class", "aside");
let section_div_aside_div = section_div_aside.appendChild(document.createElement("div"));
section_div_aside_div.setAttribute("class", "container p-5");
let section_div_aside_div_ul = section_div_aside_div.appendChild(document.createElement("ul"));
section_div_aside_div_ul.setAttribute("class", "list-unstyled");
section_div_aside_div_ul.innerHTML =`
          <li class="aside__inbox py-3">
              <i class="fas fa-inbox mr-2 text-primary"></i>Inbox <span
              class="aside__inbox-count adge badge-primary badge-pill">1</span>
          </li>
          <li class="aside__today py-3 "><i class="fas fa-calendar-day mr-2 text-success"></i>Today <span
              class="aside__today-count adge badge-primary badge-pill">1</span>
          </li>
          <li class="aside__upcoming pt-3"><i class="far fa-calendar-alt mr-2 text-primary"></i>Upcoming
            <span class="aside__upcoming-count adge badge-primary badge-pill">1</span></li>`
let section_div1 = section.appendChild(document.createElement("div"));
section_div1.setAttribute("class", "accordion");
section_div1.innerHTML = `<div class="text-left aside__project_header ml-4 pl-2" type='button' data-toggle="collapse"
data-target="#collapseOne">
<i class="fas fa-chevron-right mx-2"></i> Projects
</div>
<div id="collapseOne" class="collapse show">
<div class="custom-control custom-radio ml-5 my-3">
  <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
  <label class="custom-control-label" for="customRadio1">Microverse</label>
</div>
<div class="custom-control custom-radio ml-5 mt-3">
  <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
  <label class="custom-control-label" for="customRadio2">Microsoft</label>
</div>
<div class="project__add ml-5 mt-3 text-muted">
  <i class="fas fa-plus mr-1 text-danger"></i> Add Project
</div>`

let section_div_main = section_div.appendChild(document.createElement("main"));
section_div_main.setAttribute("class", "dashboard  px-5 w-100");
let main_header = section_div_main.appendChild(document.createElement("header"));
main_header.setAttribute("class", "d-flex justify-content-between align-items-baseline dashboard_header p-4");
main_header.innerHTML = `<h3>Microverse</h3>
<div class="d-flex header__logos">
  <i class="far fa-comment-alt"></i>
  <i class="fas fa-user-plus"></i>
  <i class="fas fa-ellipsis-h"></i>
</div>`


let section_div_main_div = section_div_main.appendChild(document.createElement("div"));
section_div_main_div.setAttribute("class", "d-flex px-4");
let main_div_div = section_div_main_div.appendChild(document.createElement("div"));
main_div_div.setAttribute("class", "card column");
let main_div_div_div = main_div_div.appendChild(document.createElement("div"))
main_div_div_div.setAttribute("class", "card py-2 px-3");
main_div_div_div.innerHTML =`
<div class="d-flex justify-content-between align-items-baseline p-1 my-2">
              <span><b class="h5">Todos </b>1</span>
              <i class="fas fa-ellipsis-h text-muted"></i>
            </div>
            <div class="card shadow-sm p-1 mb-2">
              <div class="d-flex justify-content-between align-items-baseline p-1">
                <span> <input type="radio" class="mr-2">Create Layout</span>
                <i class="fas fa-ellipsis-h text-muted"></i>
              </div>
            </div>
            <div class="card shadow-sm p-1 mb-2">
              <div class="d-flex justify-content-between align-items-baseline p-1">
                <span> <input type="radio" class="mr-2">Fix Bugs</span>
                <i class="fas fa-ellipsis-h text-muted"></i>
              </div>
            </div>
            <div class="column__add__task mt-3 text-muted">
              <i class="fas fa-plus mr-1 ml-2 "></i> Add Project
            </div>`

let main_div_div1 = section_div_main_div.appendChild(document.createElement("div"));
main_div_div1.setAttribute("class", "card column ml-3");
main_div_div1.innerHTML = `<div class="card py-2 px-3">
<!-- ======= title===== -->
<div class="d-flex justify-content-between align-items-baseline p-1 my-2">
  <span><b class="h5">Doing </b>1</span>
  <i class="fas fa-ellipsis-h text-muted"></i>
</div>
<div class="card shadow-sm p-1 mb-2">
  <div class="d-flex justify-content-between align-items-baseline p-1">
    <span> <input type="radio" class="mr-2">Create Layout</span>
    <i class="fas fa-ellipsis-h text-muted"></i>
  </div>
</div>
<div class="card shadow-sm p-1 mb-2">
  <div class="d-flex justify-content-between align-items-baseline p-1">
    <span> <input type="radio" class="mr-2">Fix Bugs</span>
    <i class="fas fa-ellipsis-h text-muted"></i>
  </div>
</div>

<div class="column__add__task mt-3 text-muted">
  <i class="fas fa-plus mr-1 ml-2 "></i> Add Project
</div>
</div>`

let main_div_div2 = section_div_main_div.appendChild(document.createElement("div"));
main_div_div2.setAttribute("class", "card column ml-3");
main_div_div2.innerHTML = `<div class="card py-2 px-3">
<div class="d-flex justify-content-between align-items-baseline p-1 my-2">
  <span><b class="h5">Done </b>1</span>
  <i class="fas fa-ellipsis-h text-muted"></i>
</div>
<div class="card shadow-sm p-1 mb-2">
  <div class="d-flex justify-content-between align-items-baseline p-1">
    <span> <input type="radio" class="mr-2">Create Layout</span>
    <i class="fas fa-ellipsis-h text-muted"></i>
  </div>
</div>
<div class="card shadow-sm p-1 mb-2">
  <div class="d-flex justify-content-between align-items-baseline p-1">
    <span> <input type="radio" class="mr-2">Fix Bugs</span>
    <i class="fas fa-ellipsis-h text-muted"></i>
  </div>
</div>
<div class="column__add__task mt-3 text-muted">
  <i class="fas fa-plus mr-1 ml-2 "></i> Add Project
</div>
</div>`
}

export default body;