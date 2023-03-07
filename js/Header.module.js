//========== import =========
import {Details} from "./Details.module.js"

export class Header{
    constructor(nameOfUrl , objKey){


        this.nameOfUrl = nameOfUrl;
        this.objKey = objKey;
        this.getData(this.nameOfUrl,this.objKey);

    }

    async getData(url,urlWord){
        let data = await fetch(url);
        let dataJson = await data.json();
        this.display(dataJson[urlWord]);

    };

    display(data){
        let res ="";
        for(let i=0 ; i< data.length ;i++){
            res +=`<div class="col-md-6 col-lg-4 col-xl-3">
            <div class="imageBox position-relative overflow-hidden" name="${data[i].strMeal}">
                <img class="w-100" src="${data[i].strMealThumb}" alt="">
                <div class="details position-absolute bottom-0 start-0 w-100 h-100 d-flex justify-content-start align-items-center p-4">
                    <p class="m-0 fs-20 lh-30 fw-600 text-dark">${data[i].strMeal}</p>
                </div>
            </div>
        </div>`;
        };

    document.querySelector(".main.header .row").innerHTML = res;
    this.next();
    
    };

    next(){
        let box = document.querySelector(".main.header .row").querySelectorAll(".imageBox");
        for(let i =0 ; i<box.length ;i++){
            box[i].addEventListener('click',function(){
                let detail = new Details(this.getAttribute("name"));
            });
        };
    };

    
}