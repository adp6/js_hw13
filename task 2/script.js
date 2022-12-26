window.onload = ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        console.log(data[0])
        let main = document.querySelector('.main');
        for (const iterator of data) {
            let card = document.createElement('div');
            card.classList.add('card');
            let container = document.createElement('div');
            container.classList.add('container');
            card.appendChild(container);
            main.appendChild(card);

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
            spanCreate('id',iterator.id)
            spanCreate('username',iterator.username)
            spanCreate('name',iterator.name)
            spanCreate('email',iterator.email)
            spanCreate('phone',iterator.phone)
            spanCreate('website',iterator.website)
            spanCreate('company name',iterator.company.name)
            spanCreate('company bs', iterator.company.bs)
            spanCreate('company catch phrase', iterator.company.catchPhrase)
            spanCreate('city', iterator.address.city)
            spanCreate('address',`${iterator.address.street} ${iterator.address.suite}`)
            spanCreate('zipcode',iterator.address.zipcode)
            spanCreate('geo',`lat:${iterator.address.geo.lat} <br>lng:${iterator.address.geo.lng}`)
        }
    })
    
}