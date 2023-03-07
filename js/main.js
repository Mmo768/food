//========== import =========
import {Header} from "./Header.module.js"
import {Search} from "./Search.module.js"
import {Catalog} from "./catalog.js"
import {Contact} from "./contact.js"


//========== global =========
const sections = document.querySelectorAll(".main"); 
const colseBtn = document.querySelector(".closed"); 
const nav = document.querySelector("nav"); 
const linksBtn = document.querySelectorAll("a[my-href]"); 



openClose();
let detail = new Header(`https://www.themealdb.com/api/json/v1/1/search.php?s=m` , "meals");




for(let i=0 ; i<linksBtn.length ;i++){
    linksBtn[i].addEventListener('click',function(){
        if(this.getAttribute("my-href") == "Search"){
            let search = new Search();
            colseBtn.click();
        }else if(this.getAttribute("my-href") == "Categories"){
            let catalog = new Catalog(`https://www.themealdb.com/api/json/v1/1/categories.php`,"categories","catalog");
            colseBtn.click();
        }else if(this.getAttribute("my-href") == "Area"){
            let area = new Catalog(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`,"meals","Area");
            colseBtn.click();
        }else if(this.getAttribute("my-href") == "Ingredients"){
            let irgument = new Catalog(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`,"meals","irgument");
            colseBtn.click();
        }else if(this.getAttribute("my-href") == "ContactUs"){
            let contact = new Contact();
            colseBtn.click();
        }
    });
};


function openClose(){
    colseBtn.addEventListener('click',function(){
        if(nav.classList.contains("navPosition")){
            nav.classList.remove("navPosition");
            colseBtn.innerHTML = `<i class="fas fa-xmark fs-3 text-dark  p-2"></i>`;
        }else{
            nav.classList.add("navPosition");
            colseBtn.innerHTML = `<i class="fas fa-bars fs-2 text-dark  p-2"></i>`;
        };
    });
};
