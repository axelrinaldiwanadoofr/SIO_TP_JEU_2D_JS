
let scene = new Scene() ;

let acteur1 = new Acteur( 100, 150, "images/mur.bmp") ;
let acteur2 = new Acteur( 140, 150, "images/sol.png") ;

scene.ajoute( acteur1 ) ;
scene.ajoute( acteur2 ) ;


// Création d'une ligne de sol
let x = 40 ;
let y = 300 ;

for( let i=0 ; i<10 ; i++ )
{
    scene.ajoute( new Acteur( x, y, "images/sol.png") ) ;
    x += 32 ;
}

scene.translateTo( 200, 200 ) ;

let sol = new AcSol( 50, 50 ) ;