const SportApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=15b5a11e728f47c9bce6b9841d553c10"
window.fetch(SportApiUrl)
.then(data=> {
    data.json()
    .then(sportnews => {
      let  sportData = sportnews.articles;
      let output='';
       for(let sports of sportData){
           output+=`
           
                <h1 class="h1Title"><a href ="${sports.url}" target="_blank"> ${sports.title}<a></h1>
                <p> ${sports.description}</p>
                <img src="${sports.urlToImage}">
                <p> ${sports.publishedAt}        
           
           `;
           document.getElementById('left').innerHTML=output;
       }
    })
    .catch(err=>console.log(err))
})
.catch(err=>console.log(err));



//time javascript heree


setInterval(()=>{
    var time = new Date().toLocaleTimeString();
    document.getElementById("time").innerHTML= time;
},1000);

setTimeout(()=>{
    var time = new Date().toLocaleDateString();
    document.getElementById("time1").innerHTML= time;
},1000);

//entertanment data.............................................

const EntUrl ='https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=15b5a11e728f47c9bce6b9841d553c10'
window.fetch(EntUrl).then(data=>{
    data.json().then(ent=> {
        let  entData = ent.articles;
      let output="";
       for(let ent of entData){
           output+=`
           
                <h1 class="h1Title"> <a href ="${ent.url}" target="_blank"> ${ent.title}<a></h1>
                <p> ${ent.description}</p>
                <img src="${ent.urlToImage}">
                <p> ${ent.publishedAt}        
           
           `;}
           document.getElementById('right').innerHTML=output;
    }).catch(err=>console.log(err))
}).catch(err=>console.log(err))

//top api...................

const TopUrl ='https://newsapi.org/v2/top-headlines?country=us&apiKey=15b5a11e728f47c9bce6b9841d553c10'
window.fetch(TopUrl).then(data=>{
    data.json().then(topnew=> {
        let  newsData = topnew.articles;
      let output="";
       for(let topnew of newsData){
           output+=`
           
                <h1 class="h1Title"> <a href ="${topnew.url}" target="_blank"> ${topnew.title}<a></h1>
                <p class="des"> ${topnew.description}</p>
                <img src="${topnew.urlToImage}">
                <p> ${topnew.publishedAt}  </p>      
           
                
           `;}
           document.getElementById('middle').innerHTML=output;
    }).catch(err=>console.log(err))
}).catch(err=>console.log(err))




