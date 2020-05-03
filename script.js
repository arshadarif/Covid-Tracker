
let india=document.querySelector('#India')
let drop=$('#navbarDropdownDiv');

let xhr = new XMLHttpRequest;

xhr.open("get","https://corona.lmao.ninja/v2/countries");
xhr.send();
xhr.onreadystatechange=function(){
    if (xhr.readyState===4){
         if(xhr.status===200){
            let result=JSON.parse(xhr.responseText);
            console.log(result);
            result.forEach((value)=>{

                
                drop.append(`<a class="dropdown-item list" href="#">${value.country}</a>`);
                

            })
            let classes=$('.list');
            console.log(classes);

           for(let i=0;i<classes.length;i++){

               classes[i].addEventListener('click',function(){
                    let checkClass=$('img').hasClass('dis');
                    if (checkClass){
                        $('img').removeClass('dis');
                    }
                   result.forEach((value)=>{
                    if(classes[i].innerHTML===value.country){
                        
                        $('#flag-img').attr('src',value.countryInfo.flag);
                        $('#flag-img').css({'height':'60px'})
                        $('#flag-img').css({'width':'80px'})
                        $('#country').html(value.countryInfo.iso3)
                        $('#case').html(value.cases);
                        $('#recover').html(value.recovered);
                        $('#deaths').html(value.deaths);
                        
                        
                    }
                   })
                      
                   
                })
                   
               
           }
            

            
        }else{
            alert('Something went wrong please refresh the page');
        }
    }
}

india.addEventListener('click',function(){
    let checkClass=$('img').hasClass('dis');
    if (checkClass){
        $('img').removeClass('dis');
    }
    let xhr = new XMLHttpRequest;
    xhr.open("get","https://corona.lmao.ninja/v2/countries/india");
    xhr.send();
    xhr.onreadystatechange=function(){
        if (xhr.readyState===4){
            if(xhr.status===200){
                let result=JSON.parse(xhr.responseText);
            
                $('#flag-img').attr('src',result.countryInfo.flag);
                $('#flag-img').css({'height':'60px'})
                $('#country').html(result.countryInfo.iso3)
                $('#case').html(result.cases);
                $('#recover').html(result.recovered);
                $('#deaths').html(result.deaths);
            
            
            }else{
                alert('The server is not responding');
            }
        }
    }
})

