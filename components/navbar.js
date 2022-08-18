function navbar() {
return `
        <h3>Owais's Mini Food App🍴</h3>
        <div id="search_div">
            <input type="search" id="query" placeholder="search meal">
            <button id="btn" onclick="search()">search</button>
        </div> `;
    }

    


    function navbar2(){
        return `
        <h3><a href="index.html">Home</a></h3>
        <div id="search_div">
            <input type="search" id="query" placeholder="search meal">
            <button onclick="searchFun()">search</button>
        </div> `;
    
    }

    export {navbar,navbar2};