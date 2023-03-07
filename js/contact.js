export class Contact{
    constructor(){

        this.displayPage();
        this.inputs = document.querySelectorAll("input");


        this.inputs[0].addEventListener('input',(e)=>{
            this.valids.validTest(this.valids.name ,this.inputs[0]);
            this.btn();
        });
        this.inputs[1].addEventListener('input',(e)=>{
            this.valids.validTest(this.valids.email ,this.inputs[1]);
            this.btn();
        });
        this.inputs[2].addEventListener('input',(e)=>{
            this.valids.validTest(this.valids.phone ,this.inputs[2]);
            this.btn();
        });
        this.inputs[3].addEventListener('input',(e)=>{
            this.valids.validTest(this.valids.age ,this.inputs[3]);
            this.btn();
        });
        this.inputs[4].addEventListener('input',(e)=>{
            this.valids.validTest(this.valids.password ,this.inputs[4]);
            this.btn();
        });
        this.inputs[5].addEventListener('input',(e)=>{
            if(this.valids.validReturn(this.valids.password ,this.inputs[4])){
                if(this.inputs[4].value == this.inputs[5].value){
                    this.inputs[5].classList.add("is-valid");
                    this.inputs[5].classList.remove("is-invalid");
                    this.btn();
                }else{
                    this.inputs[5].classList.add("is-invalid");
                    this.inputs[5].classList.remove("is-valid");
                }
            }else{
                this.valids.validTest(this.valids.password ,this.inputs[4]);
            };
        });








    };



    displayPage(){
        let res = `<div class="col-12">
        <h2 class="fs-40 lh-50 fw-500 text-white text-center mb-5">Contact us</h2>
    </div>
    <div class="col-md-6">
        <div class="box position-relative">
            <input class="form-control shadow-none border-0 border-bottom bg-transparent rounded-0" type="text" placeholder="Enter Your Name...">
            <div class="massege w-75 invalid-feedback  position-absolute top-100 start-50 translate-middle-x">
                <p class="m-0 text-center p-1 w-100 alert alert-danger">Special Characters and Numbers not allowed</p>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="box position-relative">
            <input class="form-control shadow-none border-0 border-bottom bg-transparent rounded-0" type="text" placeholder="Enter Your Email...">
            <div class="massege w-75 invalid-feedback  position-absolute top-100 start-50 translate-middle-x">
                <p class="m-0 text-center p-1 w-100 alert alert-danger">Enter valid email. *Ex: xxx@yyy.zzz</p>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="box position-relative">
            <input class="form-control shadow-none border-0 border-bottom bg-transparent rounded-0" type="text" placeholder="Enter Your Phone...">
            <div class="massege w-75 invalid-feedback  position-absolute top-100 start-50 translate-middle-x">
                <p class="m-0 text-center p-1 w-100 alert alert-danger">Enter valid Phone Number</p>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="box position-relative">
            <input class="form-control shadow-none border-0 border-bottom bg-transparent rounded-0" type="text" placeholder="Enter Your age...">
            <div class="massege w-75 invalid-feedback  position-absolute top-100 start-50 translate-middle-x">
                <p class="m-0 text-center p-1 w-100 alert alert-danger">Enter valid Age</p>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="box position-relative">
            <input class="form-control shadow-none border-0 border-bottom bg-transparent rounded-0" type="text" placeholder="Enter Your Password...">
            <div class="massege w-75 invalid-feedback  position-absolute top-100 start-50 translate-middle-x">
                <p class="m-0 text-center p-1 w-100 alert alert-danger">Enter valid password *Minimum eight characters, at least one letter and one number:*</p>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="box position-relative">
            <input class="form-control shadow-none border-0 border-bottom bg-transparent rounded-0" type="text" placeholder="Enter Your Repassword...">
            <div class="massege w-75 invalid-feedback  position-absolute top-100 start-50 translate-middle-x">
                <p class="m-0 text-center p-1 w-100 alert alert-danger">Enter valid Repassword</p>
            </div>
        </div>
    </div>
    <div class="col-12">
        <div class="box text-center">
            <button class="btn submit btn-outline-danger rounded-1" disabled>Submit</button>
        </div>
    </div>  `;
    document.querySelector(".main .row").innerHTML = res;
    }



        valids = {
            name: /^[a-zA-Z ]+$/,
            email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            phone: /^01[0125][0-9]{8}$/,
            age: /^([1-9][0-9]|100)$/,
            password: /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/,
   

            validTest: function (style, input) {
                if (style.test(input.value)) {
                   input.classList.add("is-valid"); // add
                   input.classList.remove("is-invalid"); // remove
                   return true;
                } else {
                   input.classList.add("is-invalid"); // add
                   input.classList.remove("is-valid"); // remove
                   return false;
                }
            },
            validReturn: function (style, input) {
                if (style.test(input.value)) {
                   return true;
                } else {
                   return false;
                }
            }
        };

        btn(){
            if(this.valids.validReturn(this.valids.name ,this.inputs[0]) && this.valids.validReturn(this.valids.email ,this.inputs[1]) && this.valids.validReturn(this.valids.phone ,this.inputs[2]) && this.valids.validReturn(this.valids.age ,this.inputs[3]) && this.valids.validReturn(this.valids.password ,this.inputs[4]) && this.inputs[4].value == this.inputs[5].value){
                document.querySelector("button.submit").removeAttribute("disabled");
            }else{
                document.querySelector("button.submit").setAttribute("disabled","true");
            };
        };
        





}