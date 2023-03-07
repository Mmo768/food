import {Details} from "./Details.module.js"
export class Search{
    constructor(){

        this.displayPage();
        document.querySelectorAll(".main input")[0].addEventListener('input',(e)=>{
            this.getData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e.target.value}`,"meals");

        });
        document.querySelectorAll(".main input")[1].addEventListener('input',(e)=>{
            this.getData(`https://www.themealdb.com/api/json/v1/1/search.php?f=${e.target.value}`,"meals");

        });
    };

    displayPage(){
        let res = `
            <div class="col-md-6">
                <input class="form-control shadow-none text-white rounded-0 bg-transparent border-0 border-bottom" type="text" placeholder="Search By Name...">
            </div>
            <div class="col-md-6">
                <input class="form-control shadow-none text-white rounded-0 bg-transparent border-0 border-bottom" type="text" placeholder="Search By One Letter...">
            </div>
    <div class="row g-4 mt-5">  
    </div>`;
    document.querySelector(".main .box .row").innerHTML = res;
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

    document.querySelector(".main .row.g-4.mt-5").innerHTML = res;
    this.next();
    
    };

    next(){
        let box = document.querySelectorAll(".main .row.g-4.mt-5 .imageBox");
        for(let i =0 ; i<box.length ;i++){
            box[i].addEventListener('click',function(){
                let detail = new Details(this.getAttribute("name"));
            });
        };
    };

    
}