import { Ui } from "./ui.js";
import { Details } from "./details.js";


export class games {
    constructor(){
        this.ui = new Ui();
        this.findGames("mmorpg");
        document.querySelectorAll(".list a").forEach((link) => {
            link.addEventListener("click", (e) => {
            document.querySelector(".list .active").classList.remove("active");
            e.target.classList.add("active");
            this.findGames(e.target.dataset.type);
            });
        });

        
    }

    async findGames(category) {
        // const loading = document.querySelector(".load");
        document.querySelector(".load").classList.remove("d-none");
        const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        };

        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        const response = await api.json();

        this.ui.displayGameContent(response);
        this.openDetails();
        document.querySelector(".load").classList.add("d-none");
    }


    openDetails() {
        document.querySelectorAll(".card").forEach((item) => {
        item.addEventListener("click", () => {
            const id = item.dataset.id;
            this.detailsToggle(id);
        });
        });
    }

    detailsToggle(idGame) {
        const details = new Details(idGame);
        document.querySelector(".Home").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
    }


}