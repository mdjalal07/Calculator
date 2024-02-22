
let btns=document.querySelectorAll(".box");
let display=document.querySelector(".display");
let string="";

btns.forEach((box) => {
    box.addEventListener("click",() => {
        if(box.innerText == '='){
            string=eval(string);
            display.innerText=string;
        }
        else if(box.innerText == 'AC'){
            string ="0";
            display.innerText=string;
        }
        else if(box.innerText == 'DE'){
            if(display.innerText != '0'){
                string = string.substring(0,string.length-1); 
                display.innerText=string;
            }
           
        }
        else{
            string += box.innerText;
            display.innerText=string;

        }
       
    });

});