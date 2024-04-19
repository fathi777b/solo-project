

   
   var hotel= [
    {
        name : "The Marmara",
        city : "london",
        price : 4000,
        protion :"50%" 
    },
    {
        name : "Movenpick",
        city : "France",
        price : 4000,
        protion :"20%"
    },
    {
        name : "The Conrad",
        city : "Turkey",
        price : 4000,
        protion :"30%"
    },
    {
        
        name : "Divan",
        city : "china",
        price : 4000,
        protion :"40%"
    }

   ]
   
   $("#btn1").on("click",function(){ 
  $(".hotel1").html(`<li>Name:${hotel[0].name}</li>
    <li>City:${hotel[0].city}</li>
    <li>Price $:${hotel[0].price}</li>
    <li>Promotion:${hotel[0].protion}</li>`)
   })
  

   $("#btn2").on("click",function(){
    $(".hotel1").hide()
    $(".hotel2").html(`<li>Name:${hotel[1].name}</li>
    <li>City:${hotel[1].city}</li>
    <li>Price £:${hotel[1].price}</li>
    <li>Promotion:${hotel[1].protion}</li>`)
   })
   
   $("#btn3").on("click",function(){
    $(".hotel2").hide()
    $(".hotel3").html(`<li>Name:${hotel[2].name}</li>
    <li>City:${hotel[2].city}</li>
    <li>Price £:${hotel[2].price}</li>
    <li>Promotion:${hotel[2].protion}</li>`)
   })
   
   $("#btn4").on("click",function(){
    $(".hotel3").hide()
    $(".hotel4").html(`<li>Name:${hotel[3].name}</li>
    <li>City:${hotel[3].city}</li>
    <li>Price $:${hotel[3].price}</li>
    <li>Promotion:${hotel[3].protion}</li>`)
   })

  
  













