// const Api="https://www.themealdb.com/api.php?ref=apilist.fun";



let url = "https://www.themealdb.com/api/json/v1/1/Categories.php";

let showData= async ()=>{
  try {
    let res =await fetch(url);
    let data = await res.json();
    append(data.categories)
    console.log(data.categories);


  } catch (error) {
    console.log(error);
  }
}
showData();

let append = (data) =>{
  let categories = document.getElementById("categories");
  
  data.forEach(function(el) {
    
    let div= document.createElement("div");

    let h3=document.createElement("h3");
    h3.innerText=el.strCategory;

    let img=document.createElement("img");
    img.src=el.strCategoryThumb;

    let desc = document.createElement("p");
    desc.innerText=el.strCategoryDescription;

    div.append(h3,img,desc);

    categories.append(div);
  });
}


//search functionality

let search =async () =>{

  let res =document.getElementById("categories");
  res.innerHTML=null;
  try {
      let query = document.getElementById("query").value;
      let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=9d91c31d&app_key=42e0f0ce854a6d61afeaf56c203da587`;
      let res = await fetch(url);

      let data = await res.json();
      

      append2(data.hits);
      // console.log(data.hits);
      
  } catch (error) {
      console.log(error);
  }
}
search();

let append2 = (data)=>{
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

