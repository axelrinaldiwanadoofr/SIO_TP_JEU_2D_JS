

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
    }
}