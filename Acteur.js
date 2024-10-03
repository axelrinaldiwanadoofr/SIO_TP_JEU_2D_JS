
function Acteur( x, y, imageFileName )
{
    this.x = x ;
    this.y = y ;

    this.image = document.createElement( "IMG") ;
    this.image.src = imageFileName ;
    this.image.style.position = "absolute" ;
    this.image.style.left = this.x + "px" ;
    this.image.style.top = this.y + "px" ;
    
    let terrain = document.getElementById( "terrainDeJeu") ;
    terrain.appendChild( this.image ) ;    
}

Acteur.prototype.moveTo = function( x , y )
{
    // On met les 2 attribut x et y 
    this.x = x ;
    this.y = y ;

    // On déplace l'image
    this.image.style.left = this.x + "px" ;
    this.image.style.top = this.y + "px" ;
}

Acteur.prototype.translateTo = function( xDeplacement , yDeplacement )
{
   this.moveTo(this.x + xDeplacement , this.y + yDeplacement); 
}