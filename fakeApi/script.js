const container = document.getElementById("container");

 fetch("https://fakestoreapi.com/products")
  .then((response) => {
    return response.json();
  })
.then((data)=>{
 return data.map((elem)=>{
   return container.innerHTML +=`  <div class="card" id="card">
            <h5>Title : ${elem.title}</h5>                
            <i><p>price : ${elem.price}<p></i>            
            <p>description : ${elem.description}</p>                
            <strong>category :  ${elem.category}</strong>          
        </div>`

 })
})