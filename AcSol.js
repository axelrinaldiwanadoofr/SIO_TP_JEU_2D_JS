

function AcSol( x, y )
{
    //Appel du constructeur de la classe mère Acteur
    Acteur.call( this, x, y, "images/sol.png" ) ;
}

//AcSol.prototype["__proto__"] = Acteur.prototype ;

extend( AcSol, Acteur ) ;