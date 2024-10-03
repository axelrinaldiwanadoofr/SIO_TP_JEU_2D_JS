

function AcBalle( x, y, vx=0, vy=0, ax=0, ay=0 )
{
    //Appel du constructeur de la classe mère Acteur
    AcPhysique.call( this, x, y, "images/balleRouge.png", vx, vy, ax, ay ) ;
}

//AcSol.prototype["__proto__"] = Acteur.prototype ;

extend( AcBalle, AcPhysique ) ;


AcBalle.prototype.onTimeOut = function( uneScene )
{
    // Appel de la méthode onTimeOut de la classe AcPhysique
    AcPhysique.prototype.onTimeOut.call( this, scene ) ;

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