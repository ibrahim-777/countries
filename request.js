let flags = document.getElementById('flags');
let div = document.createElement('div')
            
    fetch('https://restcountries.com/v3.1/all') 
        .then(response => response.json())
        .then(json => {          
            json.forEach(country => {
                let container = document.createElement('div')
                container.innerHTML = 
                `<div class="card-group">
                <div class="card card-columns" style="height: 14rem;">
    <img class="card-img-top border-primary img" id="${country.name.common}" src="${country.flags.png}" alt="Card image cap"/>
    </div>
    </div>
    `
                 div.classList.add('div22') 
                //Attach click event on the image , addEventListener
                flags.appendChild(container);
                container.addEventListener('click',(e)=>{
                    div.innerHTML = `
                    <img class="cancel" id="cancel" onClick={cancelDiv()} src="cancel.png"/>
                    <img class="littleImg" src='${country.flags.png}'/>
                    <h3 style="left:15px;">Name: ${country.name.common}</h3>
                    <h5>Capital: ${country.capital}</h5> 
                    <h5>Continents: ${country.continents}</h5>`
                    div.classList.add('show')   
                }) 
          
            })
            console.log(json)
        });


        flags.appendChild(div)
             console.log(cancel)
             function cancelDiv(){
                     div.classList.remove('show') 
             }
     

