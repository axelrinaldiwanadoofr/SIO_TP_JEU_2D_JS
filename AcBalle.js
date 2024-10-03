

function AcBalle( x, y, vx=0, vy=0, ax=0, ay=0 )
{
    //Appel du constructeur de la classe mère Acteur
    Acteur.call( this, x, y, "images/balleRouge.png" ) ;

    // Vitesse
    this.vx = vx ;
    this.vy = vy ;

    // Accélération
    this.ax = ax ;
    this.ay = ay ;
}

//AcSol.prototype["__proto__"] = Acteur.prototype ;

extend( AcBalle, Acteur ) ;

AcBalle.prototype.onTimeOut = function( uneScene )
{
    // Gestion du mouvement
    // Incrémente la position par la vitesse
    this.translateTo( this.vx, this.vy ) ;

    // Incremente la vitesse par l'accélération
    this.vx += this.ax ;
    this.vy += this.ay ;

    // Gestion des rebonds
    if( this.x < 0 ) this.vx = -this.vx ;
    if( this.y < 0 ) this.vy = -this.vy ;
    if( this.x + 32 > window.innerWidth ) this.vx = -this.vx ;
    if( this.y + 32 > window.innerHeight ) 
    {
        this.vy = -this.vy*0.9 ;
        this.moveTo( this.x, window.innerHeight-32 ) ;
    }
};