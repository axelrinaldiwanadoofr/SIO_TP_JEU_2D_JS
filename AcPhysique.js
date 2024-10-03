

function AcPhysique( x, y, imageFileName, vx=0, vy=0, ax=0, ay=0 )
{
    //Appel du constructeur de la classe mère Acteur
    Acteur.call( this, x, y, imageFileName ) ;

    // Vitesse
    this.vx = vx ;
    this.vy = vy ;

    // Accélération
    this.ax = ax ;
    this.ay = ay ;
}

//AcSol.prototype["__proto__"] = Acteur.prototype ;

extend( AcPhysique, Acteur ) ;

AcPhysique.prototype.onTimeOut = function( uneScene )
{
    // Gestion du mouvement
    // Incrémente la position par la vitesse
    this.translateTo( this.vx, this.vy ) ;

    // Incremente la vitesse par l'accélération
    this.vx += this.ax ;
    this.vy += this.ay ;
};