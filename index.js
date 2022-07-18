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


    const data=[
        {
            name:"orange",
            url:"images/mojito.jpg"
        },
        {
            name:"orange",
            url:"images/mojito.jpg"
        },
        {
            name:"orange",
            url:"images/mojito.jpg"
        },
        {
            name:"orange",
            url:"images/mojito.jpg"
        },
        {
            name:"orange",
            url:"images/mojito.jpg"
        },
        {
            name:"orange",
            url:"images/mojito.jpg"
        }

    ]


    data.map(item=>{
        console.log(item);

        mapData(item.name,item.url)

        
     });
     

  

})



