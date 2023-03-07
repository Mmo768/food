//========== import =========
import {Header} from "./Header.module.js"
import {apperSpinner,hiddenSpinner} from "./main.js"

export class Catalog{
    constructor(nameOfUrl , objKey ,displayOption){
        this.nameOfUrl = nameOfUrl;
        this.objKey = objKey;
        this.displayOption = displayOption;
        this.getData(this.nameOfUrl,this.objKey);


    }

    async getData(url,urlWord){
        apperSpinner();
        let data = await fetch(url);
        let dataJson = await data.json();
        this.display(dataJson[urlWord]);
        hiddenSpinner();
    };

    display(data){
        let res ="";
        if(this.displayOption == "catalog"){
            for(let i=0 ; i< data.length ;i++){
                res +=`<div class="col-md-6 col-lg-4 col-xl-3">
                <div class="imageBox position-relative overflow-hidden cur" name="${data[i].strCategory}">
                    <img class="w-100" src="${data[i].strCategoryThumb}" alt="">
                    <div class="details position-absolute bottom-0 start-0 w-100 h-100 d-flex justify-content-start align-items-center p-4">
                        <p class="m-0 fs-20 lh-30 fw-600 text-dark">${data[i].strCategory}</p>
                    </div>
                </div>
            </div>`;
            };
        }else if(this.displayOption == "Area"){
            for(let i=0 ; i< data.length ;i++){
                res +=`<div class="col-md-6 col-lg-4 col-xl-3">
                <div class="imageBox text-center bg-dark p-5 rounded-3 cur" name="${data[i].strArea}">
                    <i class="fa-solid fa-city fa-3x text-danger"></i>
                    <p class="m-0 fs-20 lh-30 fw-600 text-white">${data[i].strArea}</p>
                </div>
            </div>`;
            };
        }else if(this.displayOption == "irgument"){
            for(let i=0 ; i< data.length ;i++){
                res +=`<div class="col-md-6 col-lg-4 col-xl-3">
                <div class="imageBox text-center bg-dark p-5 rounded-3 cur h-100" name="${data[i].strIngredient}">
                    <i class="fa-solid fa-bowl-food fa-3x text-success bg-opacity-10"></i>
                    <h3 class=" fs-20 lh-30 fw-600 text-white">${data[i].strIngredient}</h3>
                 
                </div>
            </div>`;
            };
        }


    document.querySelector(".main.header .row").innerHTML = res;
    this.next();
    
    };

    next(){
        let box = document.querySelectorAll(".main .row .imageBox");

        if(this.displayOption == "catalog"){
            for(let i =0 ; i<box.length ;i++){
                box[i].addEventListener('click',function(){
                    let header = new Header(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.getAttribute("name")}`,"meals",document.querySelector(".main.header .row"));
                });
            };
        }else if(this.displayOption == "Area"){
            for(let i =0 ; i<box.length ;i++){
                box[i].addEventListener('click',function(){
                    let header = new Header(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${this.getAttribute("name")}`,"meals",document.querySelector(".main.header .row"));
                });
            };
        }else if(this.displayOption == "irgument"){
            for(let i =0 ; i<box.length ;i++){
                box[i].addEventListener('click',function(){
                    let header = new Header(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${this.getAttribute("name")}`,"meals",document.querySelector(".main.header .row"));
                });
            };
        }


    };

    
}