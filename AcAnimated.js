

function AcAnimated( x, y, nomsFichiersImage )
{
    Acteur.call( this, x, y, null ) ;

    this.indexDebut = 0 ;
    this.indexFin = nomsFichiersImage.length - 1 ;
    this.periode = 10 ;
    this.countTimeOut = 0 ;
    this.indexImageCourante = this.indexDebut ;

    // Creation des images.
    this.images = [] ;
    for( let i=0; i<nomsFichiersImage.length ; i++)
    {
        let image = document.createElement( "IMG" ) ;
        image.src = nomsFichiersImage[i] ;
        image.style.position = "absolute" ;
        image.style.left = this.x + "px" ;
        image.style.top = this.y + "px" ;
        image.style.display = "none" ;

        let terrain = document.getElementById( "terrainDeJeu") ;
        terrain.appendChild( image ) ;  
        this.images.push( image ) ;
    }

    this.images[this.indexImageCourante].style.display = "block" ;
}

extend( AcAnimated, Acteur ) ;

AcAnimated.prototype.onTimeOut = function( scene )
{
    if( this.countTimeOut >= this.periode )
    {
        // On cache l'image courante
        this.images[this.indexImageCourante].style.display = "none" ;

        // On passe à l'image suivante
        this.indexImageCourante++ ;
        if( this.indexImageCourante > this.indexFin ) 
            this.indexImageCourante = this.indexDebut ;

        // On affiche l'image suivante
        this.images[this.indexImageCourante].style.display = "block" ;

        // Remise à 0 du compteur de timeOut
        this.countTimeOut = 0 ;
    }
    else this.countTimeOut++ ;
}