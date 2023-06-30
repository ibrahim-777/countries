
// This is how JS will call an API and Print in the console the result
//  this is how JS REQUESTs a certain API / URL to retrun
let countries = document.getElementById('countries');
            let AllCountries = document.getElementById('AllCountries');
            let flags = document.getElementById('flags');
            let div = document.createElement('div')
            
fetch('https://restcountries.com/v3.1/all') 
        .then(response => response.json())
        .then(json => {          
            json.forEach(country => {
               
                // let option = document.createElement('option');
                // option.innerHTML = country.name.common;
                // AllCountries.appendChild(option);
                let container = document.createElement('div')
                container.classList.add('card') 
                
                let MyImg = document.createElement('img');
                container.appendChild(MyImg)
                MyImg.src= country.flags.png;
                MyImg.id= country.name.common;
                MyImg.classList.add('img')
                 div.classList.add('div22') 
              
                //Attach click event on the image , addEventListener

                flags.appendChild(container);
                container.addEventListener('click',(e)=>{
                    div.innerHTML = `
                    <img class="cancel" id="cancel" onClick={cancelDiv()} src="cancel.png"/>
                    <img class="littleImg" src='${country.flags.png}'/>
                    <h3 style="left:15px;">Name: ${country.name.common}</h3>
                    <h4>Capital: ${country.capital}</h4> 
                    <h4>Continents: ${country.continents
                    }</h4>
                    `
                    div.classList.add('show')
                    
                }) 
          
            });
            console.log(json)
            
        })
        flags.appendChild(div)
             console.log(cancel)
             function cancelDiv(){
                     div.classList.remove('show') 
             }
     