

function PetCard2({petName, edad, especie, color, genero}  )  {
    
    const styles= { 
        color: "white",
        textAlign: "center"
    }


    return (
     <div style={ styles}  className="pet-card">
      <h1>Aprendiendo React</h1>
      <h2>Mascota</h2>
      <h3>Nombre:{" "+ petName} </h3>
      <h3>Edad:{" "+ edad}</h3>
      <h3>Especie:{" "+ especie}</h3>
      <h3>Color:{" "+ color} </h3>
      <h3>Genero:{" "+ genero}</h3>
      
    
     </div>
 
    );

}



export default PetCard2