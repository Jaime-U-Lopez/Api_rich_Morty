export default function character (props){

    const {character,setCharacters}=props;
    console.log(character)


const resetCharacters =()=>{

    setCharacters (null)
console.log("dejar en blanco");
}

return(


    <div className="characters">

        <h1>personajes </h1>
        <span className="back-home" onClick={resetCharacters}> volver al home</span>
        <div className="container-characters">
            {character.map((character,index)=>(

                <div className="character-container"  key={index}> 
                
                <div>
                <img src={character.image} alt={character.name}/>
                </div>
                
                <h3>{character.name}</h3>

                <h6>
                   {character.status==="Alive" ?(

                    <>
                    <span className="alive"/>
                    </>
                   ):(
                    <>
                    <span className="dead"/>
                    </>
                   )}
                </h6>

                <p>
                    <span className="text-grey">Episodios</span>
                    <span> {character.episode.length}</span>
                </p>

               
                <p>
                    <span className="text-grey">Especie </span>
                    <span> {character.species}</span>
                </p>
                </div>
            ))}

        </div>
        <span className="back-home" onClick={resetCharacters}>volver a la home</span>
    </div>


)

}