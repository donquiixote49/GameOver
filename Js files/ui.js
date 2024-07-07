export class Ui {
    displayGameContent(content) {
        let gBox = `` ;
        for (let i = 0; i < content.length; i++) {
            gBox += `
            <div  class="col-md-4">
                <div data-id="${content[i].id}" class="card bg-transparent h-100 " role="button" >
                    <div class="card-body">
                    <figure class="position-relative" >
                        <img class="card-img-top object-fit-cover h-100" src="${content[i].thumbnail}" alt="">
                    
                    </figure>
                    <figcaption>
                        <div class="card-badge d-flex justify-content-between ">
                            <h3 class="h5 text-white mt-1 small">${content[i].title}</h3>
                            <span class="badge text-bg-primary p-2 ">Free</span>
                        </div>
                        <p class="card-text text-white small text-center opacity-50">
                            ${content[i].short_description} 
                        </p>
                    </figcaption>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <span class="badge badge text-bg-secondary ">${content[i].genre}</span>
                        <span class="badge badge text-bg-secondary ">${content[i].platform}</span>
                    </div>
                </div>
            </div>
            `
            
            
        }

        document.getElementById("gameData").innerHTML = gBox

    }




    displayGameDetails(content){
        let dBox = `
        <div class="col-md-4">
                <img src="${content.thumbnail}" alt="" class="w-100">
            </div>
            <div class="col-md-8 text-white">
                <h3>Title: ${content.title}</h3>
                <p>Category: <span class="badge text-bg-info ms-2">${content.genre}</span></p>
                <p>Platform: <span class="badge text-bg-info ms-2">${content.platform}</span></p>
                <p>Status: <span class="badge text-bg-info ms-2">${content.status}</span></p>
                <p class="small">${content.description}</p>
                <a class="btn btn-outline-danger" target="_blank" href="${content.game_url}">Game Site</a>
            </div>
        ` 
        document.getElementById("detailsInfo").innerHTML = dBox

        

    }


    }

