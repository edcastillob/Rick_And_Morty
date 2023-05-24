import { connect } from 'react-redux';
import  Card   from '../Card/Card';

 function Favorites({ myFavorites}) {
  
    return( 
     
    <div>
       {/* {
          myFavorites.map((myFavorites, index) => {
             return (
                <Card 
                key =     { index }// es un identificador para react 
                id =      { myFavorites.id }//es un identificador para el programador
                name =    { myFavorites.name } 
                image   = { myFavorites.image }
                status =  { myFavorites.status } 
                gender  = { myFavorites.gender }
                species = { myFavorites.species }
               //  onClose = { onClose }
                origin  = { myFavorites.origin?.name} 
            />               
             )
          })
       } */}

{
                myFavorites?.map(character => {
                    return (
                        <Card 
                            key={character.id}
                            id= {character.id}
                            name={character.name}
                            species={character.species}
                            gender={character.gender}
                            origin = {character.origin}
                            status ={character.status}
                            image={character.image}
                            
                        />
                    )
                })
            }


    </div>
    )
 }

 const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
 }

 export default connect(mapStateToProps, null)(Favorites);