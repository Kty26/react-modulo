
import './App.css'
import './component/PetCard'
import PetCard2 from './component/PetCard copy'
import PetCard from './component/PetCard'
import FotoPerro from './assets/img/perro.jpg'


function App() {


  return (
    <>
     
     <div>

     <img src="/french.jpg" alt="" width= "350px" />
        <PetCard2
        
         petName= "Sushy"
         especie= "Perro"
         edad = "5" 
         color= "Blanco"
         genero= "Macho"
         />
         
         <img src={FotoPerro} alt="" width= "350px" />
         
         <PetCard2
         petName= "Thor"
         especie= "Perro"
         edad = "4" 
         color= "Marrón"
         genero= "Macho"
         />
        
        <img src="/Gato.jpg" alt="" width= "350px" />
         <PetCard
         petName= "Shumy"
         especie= {"Gato"}
         edad =  {5}
         color= "Blanco/Amarillo"
         genero= "Macho"
         /> 
         
         </div> 

        
        

        
       

    </>
  )
}

export default App
