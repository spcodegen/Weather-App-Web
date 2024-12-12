function search(){
let cityName=document.getElementById("txtCityName").value;

fetch(`http://api.weatherapi.com/v1/current.json?key=5f1a7f23e6fc420d93f41304241212&q=${cityName}`)
.then(res=>res.json())
.then(data=>{
    document.getElementById("weartherCard").innerHTML=`
<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${data.current.condition.icon}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${data.location.name}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>`
    console.log(data);
})

}
