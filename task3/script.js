window.onload = ()=>{
    fetch('https://swapi.dev/api/planets/')
    .then(response=>{return response.json()})
    .then(data=>{
        console.log(data.results[0]);
        for (const iterator of data.results) {
            let ul = document.querySelector('ul');
            // let li = document.createElement('li');
            let card = document.createElement('li');
            // card.style.padding = '20px';
            card.classList.add('card');
            let container = document.createElement('div');
            container.classList.add('container');
            card.appendChild(container);
            ul.appendChild(card)


            function spanCreate(infoBefore, infoInput){
                let before = document.createElement('span');
                before.classList.add('before');
                before.innerHTML = `${infoBefore}:`;
                let input = document.createElement('span');
                input.innerHTML = infoInput;
                input.classList.add('input');
                container.appendChild(before);
                container.appendChild(input);
            }
            spanCreate('name', iterator.name);
            spanCreate('diameter', iterator.diameter)
            spanCreate('population', iterator.population)
            spanCreate('gravity',iterator.gravity)
            spanCreate('terrain',iterator.terrain)
            spanCreate('climate',iterator.climate)
            spanCreate('rotatin period',iterator.rotation_period)
            spanCreate('surface water',iterator.surface_water)
        }

        function card(){
            let remove = document.querySelector('ul');
            remove.remove()
            let ul = document.createElement('ul');
            ul.classList.add('main');
            ul.setAttribute('type','none')
            for (const iterator of data.results) {
                // let li = document.createElement('li');
                let card = document.createElement('li');
                // card.style.padding = '20px';
                card.classList.add('card');
                let container = document.createElement('div');
                container.classList.add('container');
                card.appendChild(container);
                ul.appendChild(card)
                document.querySelector('div').appendChild(ul)
    
                function spanCreate(infoBefore, infoInput){
                    let before = document.createElement('span');
                    before.classList.add('before');
                    before.innerHTML = `${infoBefore}:`;
                    let input = document.createElement('span');
                    input.innerHTML = infoInput;
                    input.classList.add('input');
                    container.appendChild(before);
                    container.appendChild(input);
                }
                spanCreate('name', iterator.name);
                spanCreate('diameter', iterator.diameter)
                spanCreate('population', iterator.population)
                spanCreate('gravity',iterator.gravity)
                spanCreate('terrain',iterator.terrain)
                spanCreate('climate',iterator.climate)
                spanCreate('rotatin period',iterator.rotation_period)
                spanCreate('surface water',iterator.surface_water)
            }
        }
        
        let diameterBtn = document.querySelector('.diameter');
        let isSorted = false;
        let isSortedPopulation = false;
        diameterBtn.onclick = ()=>{
            if(!isSorted){
                data.results.sort((a,b)=> a.diameter - b.diameter);
                isSorted = true;
                card()
            }
            else{
                data.results.sort((a,b)=> b.diameter - a.diameter);
                isSorted = false;
                card()
                }
            }
        

        let populationBtn = document.querySelector('.population')
        populationBtn.onclick = ()=>{
            if(!isSortedPopulation){
                data.results.sort((a,b)=> a.population - b.population);
                isSortedPopulation = true;
                card()
            }
            else{
                data.results.sort((a,b)=> b.population - a.population);
                isSortedPopulation = false;
                card()
            }
        }
    })
}