
// Renvoie true si l'objet a est une instance la classe ou d'une classe mere ayant comme prototype p
function isObjectOf( object, classe )
{
	var pa = Object.getPrototypeOf( object ) ;
	if( pa.constructor == classe ) return true ;
	return isSuperPrototypeOf( classe.prototype, pa ) ;
}

// Renvoie true si le prototype pa est un prototype pere de pb
function isSuperPrototypeOf( pa, pb )
{
	if( pb["superclasses"] )
	{
		for( var i in pb["superclasses"] )
		{
			if( pb["superclasses"][i].prototype == pa ) return true ;
			if( isSuperPrototypeOf( pa, pb["superclasses"][i].prototype ) ) return true ;
		}
	}
	return false ;
}


// Renvoie true si la classe a est une classe mere de b
function isSuperClassOf( a, b )
{
	return isSuperPrototypeOf( a.prototype, b.prototype ) ;
}

// Renvoie true si m est une methode de la classe c
// On parcours le tableau prototype de la classe c a la recherche d'une case contenant 
// la référence de la methode m
function isInClass( m, c )
{
	for( let i in c.prototype )
	{
		if( c.prototype[i] == c ) return true ;
	} 
	return false ;
}
	
// Procede a l'heritage en copiant les methodes du tableau prototype de la 
// classe mere donnee par superclass dans le tableau prototype de 
// la classe fille donnee par subclass qui n'existe pas dans celui-ci

function extend( subclass, superclass )
{
	// Cree le tableau superclasses dans le prototype de subclass s'il n'existe pas
	if( subclass.prototype["superclasses"] === undefined )
	{
		subclass.prototype["superclasses"] = [] ;
	}

	// Ajoute la classe mere à la classe fille
	subclass.prototype["superclasses"].push( superclass ) ;

	// Copie les références des methodes de la classe mère dans la classe fille
	for( var nommethode in superclass.prototype )
	{
		// on verifie que le prototype de la classe fille ne possede pas deja 
		// une case du meme nom
		if( subclass.prototype[nommethode] === undefined ) 
		{
			subclass.prototype[nommethode] = superclass.prototype[nommethode] ;
		}
	}
}
	
