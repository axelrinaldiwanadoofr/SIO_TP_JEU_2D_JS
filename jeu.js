
let acteur1 = {
    x: 100,
    y: 150
};

acteur1.image = document.createElement( "IMG") ;
acteur1.image.src = "images/mur.bmp" ;
acteur1.image.style.position = "absolute" ;
acteur1.image.style.left = acteur1.x + "px" ;
acteur1.image.style.top = acteur1.y + "px" ;

let terrain = document.getElementById( "terrainDeJeu") ;
terrain.appendChild( acteur1.image ) ;