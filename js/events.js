fetch("https://mockend.com/ogurinkaben/mockend-test/platform")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    let data4 = "";
    completedata.map((data) => {
      if (data.category == "events") {
        const formatedDate = data.createdAt;
        const date = new Date(formatedDate);
        data4 += `<div class="col">
         <div class="card shadow-sm rounded">
             <img src=${data.cover_image} class="card-img-top" alt="...">
             <div class="card-body">
                 <h5 class="card-title">${data.title}</h5>
                 <p class="card-text">${date.getDate()}-${date.getMonth()}-${date.getFullYear()}</p>
             </div>
         </div>
     </div>`;
      }
    });

    document.getElementById("events-grid").innerHTML = data4;
  })
  .catch((err) => {
    console.log(err);
  });
