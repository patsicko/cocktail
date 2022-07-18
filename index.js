const search1 = document.getElementById("search1");
const search2 = document.getElementById("search2");
const btn = document.getElementById("btn");
const cardHolder=document.getElementById("cardHolder");


 const data=[
    {
        name:"lemon",
        url:"images/mojito.jpg"
    },
    {
        name:"orange",
        url:"images/orange.jpg"
    },
    {
        name:"apple",
        url:"images/apple.jpg"
    },
    {
        name:"pinapple",
        url:"images/pinapple.jpg"
    },
    {
        name:"cocktail",
        url:"images/cocktail.jpg"
    },
    {
        name:"Soya milk",
        url:"images/Soya.png"
    }

]



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


    data.map(item=>{
        console.log(item);

        mapData(item.name,item.url)

        
     });
     

  

})


  
  const search=(value)=>{
  
      const filtering=data.filter(item=>item.name.includes(value))
      cardHolder.innerHTML="";
      filtering.map(item=>{
      
          mapData(item.name,item.url)
      })  
  }
  
  

  search1.addEventListener("keyup",e=>{
  
    search(search1.value) 
  })
  

  btn.addEventListener("click", (e) => {
    
 search(search2.value)
  
});

 search2.addEventListener("keydown",e=>{

    console.log(e);
    if(e.keyCode==13){
        search(search2.value) 
    }
    
 }) 