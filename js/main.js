fetch("https://mockend.com/ogurinkaben/mockend-test/platform")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    // FILTERED FEAUTURE

    const filteredFeature = completedata.filter(
      (item) => item.isFeatured == true
    );
    const fourFilteredFeature = filteredFeature.slice(0, 4);

    //  FITLTERED EXPERIENCE

    const filteredExperience = completedata.filter(
      (item) => item.category == "experiences"
    );
    const fourFilteredExperience = filteredExperience.slice(0, 4);

    //  FITLTERED ACTIVITIES

    const filteredActivities = completedata.filter(
      (item) => item.category == "activities"
    );
    const fourFilteredActivities = filteredActivities.slice(0, 4);

    //  FITLTERED EVENTS

    const filteredEvents = completedata.filter(
      (item) => item.category == "events"
    );
    const fourFilteredEvents = filteredEvents.slice(0, 4);

    let data1 = "";
    let data2 = "";
    let data3 = "";
    let data4 = "";
    fourFilteredFeature.map((data) => {
      data1 += `<div class="col">
                            <div class="card">
                               <div class="badge-text">${data.category}</div>
                                <img src=${
                                  data.cover_image
                                } class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${data.title}</h5>
                                    <p class="card-text">${data.description.substr(
                                      0,
                                      300
                                    )}</p>
                                </div>
                            </div>
                        </div>`;
    });

    fourFilteredExperience.map((data) => {
      data2 += `<div class="col">
         <div class="card">
             <img src=${data.cover_image} class="card-img-top" alt="...">
             <div class="card-body">
                 <h5 class="card-title">${data.title}</h5>
                 <p class="card-text">${data.description.substr(0, 300)}</p>
             </div>
         </div>
     </div>`;
    });

    fourFilteredActivities.map((data) => {
      data3 += `<div class="col">
         <div class="card">
             <img src=${data.cover_image} class="card-img-top" alt="...">
             <div class="card-body">
                 <h5 class="card-title">${data.title}</h5>
                 <p class="card-text">${data.description.substr(0, 300)}</p>
             </div>
         </div>
     </div>`;
    });

    fourFilteredEvents.map((data) => {
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
    });

    document.getElementById("feature-grid").innerHTML = data1;
    document.getElementById("experience-grid").innerHTML = data2;
    document.getElementById("activities-grid").innerHTML = data3;
    document.getElementById("events-grid").innerHTML = data4;
  })
  .catch((err) => {
    console.log(err);
  });
