const Movies = [
  {
    id: 1,
    title: "Un papa hors pair",
    description: "Après le décès de sa femme, un nouveau père prend les rênes du métier le plus difficile au monde : celui de parent.",
    posterUrl: "papahorspair.jpg",
    rating: 8.5,
    trailerURL: "https://www.youtube.com/embed/6sk4etu_6G8?si=VBbb4natZcHH4Jz_" 
  },
  {
    id: 3,
    title: "Kingsman,Le cercle d'or",
     description: "Des espoins britanniques font équipe avec leurs homologues américains pour contrer une mystérieuse organisation criminelle.",
     posterUrl: 'https://www.google.com/imgres?q=boruto&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BYjM0MDRkYzctMTNhMS00ODYwLTgwMWItZDYxNDlhOGY1YjRlXkEyXkFqcGdeQXVyMzExMzk5MTQ%40._V1_FMjpg_UX1000_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt6342474%2F&docid=9rGzDQ026Vag3M&tbnid=Q00hr1i90F7rAM&vet=12ahUKEwiAzJ-9ifqHAxVZhf0HHfeKCJYQM3oECGcQAA..i&w=1000&h=1414&hcb=2&ved=2ahUKEwiAzJ-9ifqHAxVZhf0HHfeKCJYQM3oECGcQAA',
     rating: 9.0,
    trailerURL: "https://www.youtube.com/embed/TnZpweFzRBk?si=HJK5b12qcE7LzvP_"
        
    },
  {
    id: 4,
     title: "En plein vol",
    description: "Un voleur professionnel réunit une équipe pour dérober un avion rempli de lingots d'or.",
    posterUrl: '/enpleinvol.jpg', 
    rating: 8.7,
    trailerURL: "https://www.youtube.com/embed/N6yFLa0SEek?si=u2vKqxXsFbSekzbE"
        
    },
  {
    id: 5,
     title: "Bad Boys for life",
    description: "Even bad boys grow up, and Miami cop Marcus is ready for his well-deserved retirement — until partner Mike is targeted by a cutthroat drug cartel.",
    posterUrl: 'https://www.google.com/imgres?q=bad%20boys%20for%20life%20netflix&imgurl=https%3A%2F%2Focc-0-1722-1723.1.nflxso.net%2Fdnm%2Fapi%2Fv6%2FQs00mKCpRvrkl3HZAN5KwEL1kpE%2FAAAABdQU6IMzaObrS6DWhcSvAFLV6x1vffjXso7VQPYsfnIcOHRwc9mIpRi3LsMIbt1O1C2RryNyycPk-LfIYan7qCXyUG6DN6PCsXs8.jpg%3Fr%3Ddd6&imgrefurl=https%3A%2F%2Fqr.netflix.com%2Flu%2Ftitle%2F81152992&docid=0-JkkuVW9TOmFM&tbnid=0IqIY-5wp3oQ4M&vet=12ahUKEwiWsZyu0O-HAxUcgv0HHQHvFYAQM3oECHcQAA..i&w=512&h=288&hcb=2&ved=2ahUKEwiWsZyu0O-HAxUcgv0HHQHvFYAQM3oECHcQAA',
    rating: 9.1,
    trailerURL: "https://www.youtube.com/embed/P9-EBg4QGEY?si=ml8v5GNGXT94VBYF"
            
    },
  {
    id: 6,
    title: "JUMANGI,Bienvenue dans la jungle",
    description: "Quatres lycéens sont aspirés dans un jeu vidéo magique et doivent jouer ensemble pour sortir et retourner chez eux.",
    posterUrl: "https://www.google.com/imgres?q=jumanji%20welcome%20to%20the%20jungle&imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fjumanji%2Fimages%2F1%2F1b%2FJumanji_2017_Poster.jpg%2Frevision%2Flatest%3Fcb%3D20181023182751&imgrefurl=https%3A%2F%2Fjumanji.fandom.com%2Fwiki%2FJumanji%3A_Welcome_to_the_Jungle&docid=DNx7jSKio1L3oM&tbnid=Ya97Pq-9x4JzrM&vet=12ahUKEwil8qGd0e-HAxVVhv0HHbq4BwMQM3oECBsQAA..i&w=1800&h=2667&hcb=2&ved=2ahUKEwil8qGd0e-HAxVVhv0HHbq4BwMQM3oECBsQAA",
    rating: 8.9,
    trailerURL: "https://www.youtube.com/embed/oZI2njF5rx0?si=Z2M-XiTWLwyOxOgb"
                
    },
  {
    id: 7,
    title: "The Punisher",
    description: "After his entire family is slaughtered, a former elite FBI agent, thought to have died in the carnage, embarks on a merciless vendetta. Only the death of his enemies can stop him.",
    posterUrl: 'https://www.google.com/imgres?q=punisher&imgurl=https%3A%2F%2Fresizing.flixster.com%2FWeVhaDzEnQsS6H-bJ5BtBOct9Dw%3D%2Ffit-in%2F352x330%2Fv2%2Fhttps%3A%2F%2Fresizing.flixster.com%2FKA-pULTDXnvCfGLmqVXkBU4IkYE%3D%2Fems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI2MDk1NS53ZWJw&imgrefurl=https%3A%2F%2Fwww.rottentomatoes.com%2Ftv%2Fmarvels_the_punisher&docid=snAlR0MIci2nEM&tbnid=GOHEzBcswfEL8M&vet=12ahUKEwjI6LTBmvOHAxVcBNsEHbzXMTwQM3oECGwQAA..i&w=223&h=330&hcb=2&ved=2ahUKEwjI6LTBmvOHAxVcBNsEHbzXMTwQM3oECGwQAA',
    rating: 9.0,
    trailerURL: "https://www.youtube.com/embed/09Gz82tLmXA?si=1BGtY8rHbGztfoeI"
                    
    },
    {
    id: 8,
    title: "Money Heist",
    description: "Eight thieves take hostages in the Royal Mint of Spain, while a criminal mastermind manipulates the police to carry out his plan.",
    posterUrl: "https://www.google.com/imgres?q=money%20heist&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_FMjpg_UX1000_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt6468322%2F&docid=aNoNhHUWUPZBvM&tbnid=W3fHJz39JPSEWM&vet=12ahUKEwjzqbDS0--HAxW-i_0HHUp0DCQQM3oECBUQAA..i&w=1000&h=1506&hcb=2&ved=2ahUKEwjzqbDS0--HAxW-i_0HHUp0DCQQM3oECBUQAA",
    rating: 9.2,
    trailerURL: "https://www.youtube.com/embed/0ULjL4cbSro?si=2moU5c7zmQnUX__g"
                    
    }
];
export default Movies;



