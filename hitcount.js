function updateCounter(){
    fetch("https://imvougfiu3.execute-api.us-east-1.amazonaws.com/Prod/count")
      .then(response => response.text())
      .then((body) => {
        document.getElementById("counter").innerHTML=body
      })
      .catch(function(error) {
        console.log(error); 
      });  
    }  