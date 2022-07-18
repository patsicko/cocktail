const search = document.getElementById("search");
const btn = document.getElementById("btn");
const cardHolder=document.getElementById("cardHolder");

btn.addEventListener("click", (e) => {
  console.log(search.value);
});

const mapData = (label,image) => {

  const card = `<div class="card">
                    <div class="label">
                          ${label}
                    </div>
                    <img src=${image} alt="image" >
                </div>`;


cardHolder.innerHTML+=card;

              
};

document.addEventListener("DOMContentLoaded",e=>{
    mapData(`orange`,`images/mojito.jpg`);
    mapData(`Mango`,`images/mojito.jpg`);
    mapData(`apple`,`images/mojito.jpg`);
    mapData(`lemon`,`images/mojito.jpg`);
    mapData(`strawberry`,`images/mojito.jpg`);
    mapData(`pinapple`,`images/mojito.jpg`);
})



