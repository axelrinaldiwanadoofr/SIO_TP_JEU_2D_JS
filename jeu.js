
let acteur1 = new Acteur( 100, 150, "images/mur.bmp") ;
let acteur2 = new Acteur( 140, 150, "images/sol.png") ;

// Création d'une ligne de sol
let x = 40 ;
let y = 300 ;
let acteurs = [] ;

for( let i=0 ; i<10 ; i++ )
{
    acteurs.push( new Acteur( x, y, "images/sol.png") ) ;
    x += 32 ;
}

acteurs[3].translateTo( 0, -32) ;