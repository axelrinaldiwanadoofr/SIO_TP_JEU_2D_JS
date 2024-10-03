
function Scene()
{
    this.lesActeurs = new Array() ;
}

Scene.prototype.ajoute = function( unActeur )
{
    this.lesActeurs.push( unActeur ) ;
}

Scene.prototype.translateTo = function( xDeplacement , yDeplacement )
{
    for( let i=0 ; i<this.lesActeurs.length ; i++ )
    {
        this.lesActeurs[i].translateTo( xDeplacement, yDeplacement ) ;
    }
}

Scene.prototype.onTimeOut = function()
{
    for( let i=0 ; i<this.lesActeurs.length ; i++ )
    {
        this.lesActeurs[i].onTimeOut( this ) ;
    }
}