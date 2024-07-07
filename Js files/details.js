import {Ui} from "./ui.js"; 


export class Details {
    constructor(gameID) {
        this.ui = new Ui();
        
        document.getElementById("xBtn").addEventListener("click", function(){
            document.querySelector(".details").classList.add("d-none")
            document.querySelector(".Home").classList.remove("d-none")
        });

        this.findDetails(gameID)
    }



    async findDetails(gameID){
        document.querySelector(".load").classList.remove("d-none")
        
        
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'a74eae291fmsh40e2ee8ce44b8efp19bba4jsnea88b0bf90ab',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        
        const dApi = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameID}`, options)
        
        const response = await dApi.json()
        this.ui.displayGameDetails(response)
        document.querySelector(".load").classList.add("d-none");
                
        
        
        }

}
