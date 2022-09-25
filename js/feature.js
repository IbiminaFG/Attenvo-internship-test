fetch("https://mockend.com/ogurinkaben/mockend-test/platform")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    let data1 = "";

    completedata.map((data) => {
      if (data.isFeatured == true) {
        data1 += `<div class="col">
                        <div class="card">
                           <div class="badge-text">${data.category}</div>
                            <img src=${data.cover_image} class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${data.title}</h5>
                                <p class="card-text">${data.description}</p>
                            </div>
                        </div>
                    </div>`;
      }
    });

    document.getElementById("feature-grid").innerHTML = data1;
  })
  .catch((err) => {
    console.log(err);
  });
