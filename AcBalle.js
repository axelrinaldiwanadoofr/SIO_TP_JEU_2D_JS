

function AcBalle( x, y, vx=0, vy=0 )
{
    //Appel du constructeur de la classe mère Acteur
    Acteur.call( this, x, y, "images/balleRouge.png" ) ;

    this.vx = vx ;
    this.vy = vy ;
}

//AcSol.prototype["__proto__"] = Acteur.prototype ;

extend( AcBalle, Acteur ) ;

AcBalle.prototype.onTimeOut = function( uneScene )
{
    // Gestion du mouvement
    this.translateTo( this.vx, this.vy ) ;


    // Gestion des rebonds
    if( this.x < 0 ) this.vx = -this.vx ;
    if( this.y < 0 ) this.vy = -this.vy ;
    if( this.x + 32 > window.innerWidth ) this.vx = -this.vx ;
    if( this.y + 32 > window.innerHeight ) this.vy = -this.vy ;
};