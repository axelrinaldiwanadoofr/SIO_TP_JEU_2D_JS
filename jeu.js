
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

let sol = new AcSol( 50, 50 ) ;
scene.ajoute( sol ) ;

scene.translateTo( 200, 200 ) ;

/*
for( let i=0 ; i<50 ; i++ )
{
    scene.ajoute( new AcBalle( 
        Math.random() * 200, Math.random() * 200,
        Math.random()*20 -10 , Math.random()*20 -10 ) ) ;
}
*/

scene.ajoute( new AcBalle( 100, window.innerHeight-32, 3, -5, 0, 0.1 ) ) ;


// On définit un timer toutes les 20 ms
setInterval( function ()
{
    scene.onTimeOut() ;
}, 20 ) ;
