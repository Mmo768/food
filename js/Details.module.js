
export class Details{
    constructor(Detailsname){
        this.Detailsname = Detailsname;

        this.getData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.Detailsname}`,"meals");

    }

    async getData(url,urlWord){
        let data = await fetch(url);
        let dataJson = await data.json();
        this.display(dataJson[urlWord][0]);

    };

    display(data){
        let res ="";
        res =`<div class="col-md-4">
        <div class="image">
            <img class="w-100" src="${data.strMealThumb}" alt="">
        </div>
    </div>
    <div class="col-md-8">
        <div class="box text-white">
            <h2 class="fs-30 fw-500">Instructions</h2>
            <p class="lh-25 fw-400">${data.strInstructions}</p>
            <ul>
                <li class="fs-25 lh-30 fw-500">Area : <span class="fw-300">${data.strArea}</span></li>
                <li class="fs-25 lh-30 fw-500">Category : <span class="fw-300">${data.strCategory}</span></li>
                <li class="fs-25 lh-30 fw-500">Recipes : 
                    <ul>
                        <li class="d-inline-block bg-success rounded-1 p-2 my-3 fw-300 fs-15 lh-15">2 ${data.strIngredient1}</li>
                        <li  class="d-inline-block bg-success rounded-1 p-2 my-3 fw-300 fs-15 lh-15">2 ${data.strIngredient2}</li>
                        <li  class="d-inline-block bg-success rounded-1 p-2 my-3 fw-300 fs-15 lh-15">${data.strIngredient3}</li>
                        <li  class="d-inline-block bg-success rounded-1 p-2 my-3 fw-300 fs-15 lh-15">1 ${data.strIngredient4}</li>
                        <li  class="d-inline-block bg-success rounded-1 p-2 my-3 fw-300 fs-15 lh-15">${data.strIngredient5}</li>
                        <li  class="d-inline-block bg-success rounded-1 p-2 my-3 fw-300 fs-15 lh-15">${data.strIngredient6}</li>
                    </ul>
                </li>
                <li class="fs-25 lh-30 fw-500">Tags : 
                    <ul>
                        <li  class="d-inline-block bg-danger rounded-1 p-2 my-3 fw-300 fs-15 lh-15">${data.strTags}</li>

                    </ul>
                </li>
                <li>
                    <a href="${data.strSource}" class="btn btn-success">source</a>
                    <a href="${data.strYoutube}" class="btn btn-danger">youtube</a>
                </li>
            </ul>
        </div>
    </div>`;
    document.querySelector(".main.header .row").innerHTML = res;
    }; 
}