

let url = "https://www.themealdb.com/api/json/v1/1/random.php";

let getRandom =async () =>{
   
  try {
    let res = await fetch(url);
    let data = await res.json();
    
    append(data.meals);
   
    console.log(data.meals)
    
  } catch (error) {
    console.log(error);
  }
}

getRandom();


let append = (data)=>{
    let random = document.getElementById("random");
    
    data.forEach(function getData(el) {
        let div= document.createElement("div");

        let img= document.createElement("img");
        img.src=el.strMealThumb;

        let h3 = document.createElement("h3");
        h3.innerText=el.strMeal;

        let p=document.createElement("p");
        p.innerText=el.strInstructions;

        div.append(img,h3,p);

        random.append(div);
    });
    
}


//for search box

let searchFun =async () =>{
    let res =document.getElementById("random");
    res.innerHTML=null;
    try {
        let query = document.getElementById("query").value;
        let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=9d91c31d&app_key=42e0f0ce854a6d61afeaf56c203da587`;
        let res = await fetch(url);

        let data = await res.json();
        

        append3(data.hits);
        // console.log(data.hits);
        
    } catch (error) {
        console.log(error);
    }
}
searchFun();

let append3 = (data)=>{
    let results = document.getElementById("results");

    data.forEach(function(el) {
       
        let div=document.createElement("div");

        let name= document.createElement("h3");
        name.innerText=el.recipe.label;

        let img = document.createElement("img");
        img.src=el.recipe.image;

        div.append(name,img);

        results.append(div);

    });
}