let institution =document.querySelector("#subject-all");
let redirection =document.getElementById("Redirect-link");
let button =document.getElementById("form-submit");
let input = document.querySelectorAll('input')


let chooseSchool =()=>{
    let small =institution.value.toLowerCase() ; 
        console.log(small);
        
    if (small == 'benson idahosa university' || small == 'biu' || small == 'benson idahosa') {
        redirection.setAttribute( "href" , '#contact');
        redirection.click()
    } 
    else if(small == 'edo state university' || small == 'edsu' || small =='edo state'){

        redirection.setAttribute("href" , '#footer')
        redirection.click()
    }
    else if(small == 'wellspring university' || small == 'wellspring' ){

        redirection.setAttribute("href" , '#top')
        redirection.click()
    }
    else {
        redirection.setAttribute("href" , '#courses')
        redirection.click()
    }
}
button.addEventListener("click", function(){
    if (input[0].value ==''  || input [1].value =='' || input[2].value == '') {
        button.setAttribute("type" , " submit")
        
    } else {
        chooseSchool()
    }
    

})