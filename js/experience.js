fetch("https://mockend.com/ogurinkaben/mockend-test/platform")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    let data2 = "";
    completedata.map((data) => {
      if (data.category == "experiences") {
        data2 += `<div class="col">
         <div class="card">
             <img src=${data.cover_image} class="card-img-top" alt="...">
             <div class="card-body">
                 <h5 class="card-title">${data.title}</h5>
                 <p class="card-text">${data.description}</p>
             </div>
         </div>
     </div>`;
      }
    });
    document.getElementById("experience-grid").innerHTML = data2;
  })
  .catch((err) => {
    console.log(err);
  });
