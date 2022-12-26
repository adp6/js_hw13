window.onload = ()=>{
    const xhr = new XMLHttpRequest();
    let img = document.querySelector('.image');
    let image = document.createElement('img');
    let imageEl = document.querySelector('img');
    function randomImg() {
        xhr.open('GET','https://dog.ceo/api/breed/hound/images/random');
        xhr.onreadystatechange = ()=>{
            if(xhr.response){
                if(imageEl == null){
                    image.setAttribute('src',xhr.response.message)
                    img.appendChild(image)
                }
                else {
                    imageEl.setAttribute('src',xhr.response.message)
                }
            }
        }
        xhr.responseType = 'json';
        xhr.send()
    }
    xhr.open('GET', "https://dog.ceo/api/breeds/list/all");
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                let objectData = xhr.response.message;
                    for (const key in objectData) {
                        let li = document.createElement('li');
                        li.innerHTML = key;
                        li.classList.add(key)
                        let ul = document.querySelector('ul')
                        ul.appendChild(li);
                        li.onclick = ()=>{
                            if(objectData[key].length == 0){
                                console.log('da')
                                randomImg()
                            }
                            else {
                                xhr.open('GET',"https://dog.ceo/api/breed/hound/images")
                                xhr.onreadystatechange = ()=>{
                                if(xhr.readyState == 4 && xhr.status == 200){
                                    let res = 0;
                                    let imgArr = xhr.response.message
                                    for (const keys of objectData[key]) {
                                        for(let i = 0;i<imgArr.length;i++){
                                        let regular = new RegExp(keys);
                                        let link = regular.test(imgArr[i]);
                                        if(link){
                                            res+=i;
                                            break
                                        }
                                        }
                                    }
                                    if(res > 0){
                                        if(imageEl == null){
                                            image.setAttribute('src',imgArr[res])
                                            img.appendChild(image)
                                        }
                                        else {
                                            imageEl.setAttribute('src',imgArr[res])
                                        }
                                    }
                                    else {
                                        randomImg()
                                       
                                    }
                                }
                            }
                            xhr.responseType = 'json';
                            xhr.send()
                            }
                            
                        }
                    }
                
            }
        }
    xhr.responseType="json";
    xhr.send(null);
}