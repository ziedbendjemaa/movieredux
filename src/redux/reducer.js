import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE, } from "./actionType";



const init={
    moviedata:[
        {
            id:Math.random(),
            image:"https://i.pinimg.com/originals/0c/2a/8f/0c2a8f811dfcd2cc2fe6767138cbaaf5.jpg",
            name:"Scarface",
            rating:"4",
            type:"Crime",
            description:"Scarface is a 1983 American crime drama film directed by Brian De Palma and written by Oliver Stone. A remake of the 1932 film of the same name, it tells the story of Cuban refugee Tony Montana (Al Pacino), who arrives penniless in 1980s Miami and goes on to become a powerful drug lord.",
            trailer:"https://www.youtube.com/embed/7pQQHnqBa2E"
        },
        {
            id:Math.random(),
            image:"https://i.pinimg.com/originals/94/a2/31/94a23156f53779069e5d2155cb8a97f7.jpg",
            name:"Mission impossible",
            rating:"4",
            type:"Action",
            description:"Mission impossible (Mission: Impossible) est une série cinématographique américaine, inspirée de la série télévisée éponyme mettant en vedette depuis 1996 Tom Cruise (également producteur) dans le rôle de Ethan Hunt ainsi que des personnages récurrents tels Simon Pegg (Benji Dunn) ou Ving Rhames (Luther Stickell).",
            trailer:"https://www.youtube.com/embed/wb49-oV0F78"
        },
        {
            id:Math.random(),
            image:"https://www.ecranlarge.com/uploads/image/001/125/8t7cemgym6dx0fa71yj6uo0rno-475.jpg",
            name:"The Dark Knghit ",
            rating:"5",
            type:"Crime Action",
            description:"Plot. A gang of criminals rob a Gotham City mob bank; the Joker manipulates them into murdering each other for a higher share until only he remains, escaping with the money. Batman, District Attorney Harvey Dent and Lieutenant Jim Gordon form an alliance to rid Gotham of organized crime.",
        trailer:"https://www.youtube.com/embed/EXeTwQWrcwY"
        },
        {
            id:Math.random(),
            image:"https://i.pinimg.com/originals/43/6f/16/436f167510e280a50ba96fd2b04a3344.jpg",
            name:"The Joker",
            rating:"4",
            type:"Crime , Drama",
            description:"Le Joker est un personnage de fiction, un super-vilain des comic books de DC Comics. Créé par Jerry Robinson, Bill Finger et Bob Kane, il apparaît initialement dans Batman nᵒ 1, au printemps 1940.",
            trailer:"https://www.youtube.com/embed/zAGVQLHvwOY"
        },
        {
            id:Math.random(),
            image:"https://c8.alamy.com/compfr/bkb5rx/titanic-annee-1997-realisateur-james-cameron-kate-winslet-leonardo-dicaprio-affiche-de-film-usa-bkb5rx.jpg",
            name:"Titanic ",
            rating:"3",
            type:"Romantic",
            description:"Titanic est un film dramatique américain écrit, produit et réalisé par James Cameron, ... Titanic. Description de cette image, également commentée ci-après.",
            trailer:"https://www.youtube.com/embed/kVrqfYjkTdQ"
        },
        {
            id:Math.random(),
            image:"https://wallpaperaccess.com/full/3244446.jpg",
            name:"Star Wars",
            rating:"4",
            type:"Action",
            description:"Star Wars ou La Guerre des étoiles, est une saga cinématographique de science-fiction créée par George Lucas, emblématique d'un genre que l'on nomme space opera et constituée de six longs-métrages réalisés entre 1977 et 2005.",
            trailer:"https://www.youtube.com/embed/8Qn_spdM5Zg"
        },
        {
            id:Math.random(),
            image:"https://vistapointe.net/images/dumb-and-dumber-to-wallpaper-2.jpg",
            name:"Dumb and Dumber",
            rating:"3",
            type:"Comedy",
            description:"Starring Jim Carrey and Jeff Daniels, it tells the story of Lloyd Christmas (Carrey) and Harry Dunne (Daniels), two dumb but well-meaning friends from Providence, Rhode Island, who set out on a cross-country trip to Aspen, Colorado, to return a briefcase full of money to its owner, thinking it was abandoned as a ...",
            trailer:"https://www.youtube.com/embed/dmNddThxi4c"
        },
        {
            id:Math.random(),
            image:"https://m.media-amazon.com/images/M/MV5BNWIyNmQyNjctYmVmMS00MGI4LWIxMmUtNjA0ODYzOTA0Yjk0L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg",
            name:"Rocky Balboa ",
            rating:"2",
            type:"Sport",
            description:"Rocky was an all-or-nothing brawler coming into his first bout with Creed; however, under the training of Mickey, he began to develop his boxing skills which he eventually mastered. During his reign as world champion, he became a class hybrid fighter, possessing the qualities of an inside fighter, brawler, and swarmer.",
            trailer:"https://www.youtube.com/embed/8tab8fK2_3w"
        },
        {
            id:Math.random(),
            image:"https://www.filmarena-eng.com/obrazky/film_26415_1.jpg",
            name:"Fast and Furious",
            rating:"3",
            type:"Sport,Action",
            description:"The Fast & The Furious is loosely based on an article in a magazine about street clubs that race Japanese cars late at night. ... The FBI sends LAPD officer Brian O'Conner undercover into Los Angeles' street racing circuit to take down Toretto and his team.",
            trailer:"https://www.youtube.com/embed/_qyw6LC5pnE"
        },
        {
            id:Math.random(),
            image:"https://m.media-amazon.com/images/M/MV5BMTM3NDM5MzY5Ml5BMl5BanBnXkFtZTcwNjExMDUwOA@@._V1_FMjpg_UX1000_.jpg",
            name:"Ice Age ",
            rating:"1",
            type:"Story",
            description:"Set during the days of the ice age, the film centers around three main characters—Manny (Romano), a no-nonsense woolly mammoth; Sid (Leguizamo), a loudmouthed ground sloth; and Diego (Leary), a sardonic saber-tooth tiger—who come across a human baby and work together to return it to its tribe.",
            trailer:"https://www.youtube.com/embed/i4noiCRJRoE"
        },
        {
            id:Math.random(),
            image:"https://i2.wp.com/gameitall.com/wp-content/uploads/2017/05/Pirates1.jpg?fit=1382%2C2048&ssl=1",
            name:"Pirates of the Carribean",
            rating:"3",
            type:"Adventure",
            description:"Pirates of the Caribbean is a sweeping action-adventure story set in an era when villainous pirates scavenged the Caribbean seas. This roller coaster tale teams a young man, Will Turner, with an unlikely ally in rogue pirate Jack Sparrow.",
            trailer:"https://www.youtube.com/embed/Hgeu5rhoxxY"
        },
        {
            id:Math.random(),
            image:"https://i.pinimg.com/474x/19/c2/71/19c27192bbb83cb63b6d94dd1a7059af.jpg",
            name:"Die Another Day",
            rating:"4",
            type:"Action",
            description:"Pierce Brosnan's fourth (and final) outing as secret agent 007 finds the ever-daring James Bond facing off against a North Korean terrorist in league with a British diamond merchant who's financing the development of a space weapon. PG-13 - Some material may be inappropriate for children under 13.",
            trailer:"https://www.youtube.com/embed/kNO7uwGU6cA"
        },
    ]
}
export const reducerofMovie=(state=init,{type,payload})=>{
    switch (type) {
        case ADD_MOVIE:
            return{
                ...state,moviedata:[...state.moviedata,payload]
            }
            case EDIT_MOVIE:
                return{
                    ...state,moviedata:state.moviedata.map((el)=>el.id===payload.id?({...el,...payload}):el)
                   
                }
                case DELETE_MOVIE:
                    return{
                        ...state,moviedata:state.moviedata.filter(el=>el.id!==payload)
                    }
            
            
    
        default:
           return state
    }
}