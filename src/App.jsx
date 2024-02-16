import { useState } from 'react'
import './App.css'
import donandoandoimg from './donando.svg'
import giffinderimg from './giphy.svg'
import cartimg from './cart.svg'
import conocimientoimg from './conocimiento.png'
import downloadimg from './download.svg'
import linkedin from './linkedin.svg'
import github from './github.svg'
import email from './email.svg'
import curriculum from './Ugalde_Lopez_Eduardo_CV.pdf'
import Modal from 'react-modal'
import ReactDOM from 'react-dom'

const ModalComponent = ({ isOpen, onRequestClose, children }) => {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Color de fondo del overlay
    },
    content: {
      width: '70%', // Ajusta el ancho del modal según tus necesidades
      margin: 'auto', // Centra el modal horizontalmente
    },
  };
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="CV PDF"
      portalClassName="modal-portal"
      style={customStyles}
    >
      {children}
    </Modal>
  );
};


function App() {
  const [open, setOpen] = useState(false)

  const handleOpenCV = () => {
    setOpen(true)
  }

  const GoAddress = (address) => () => {
    window.open(address, '_blank')
  }

  return (
    <>
      <div style={{display:"flex", width:"100%", justifyContent:"center", borderBottom:"2px solid #e6dafa"}}>
          <h1 style={{color:"#f9f9f9"}}>Portafolio</h1>
      </div>
      <div style={{display:"flex", width:"100%", justifyContent:"center", borderBottom:"2px solid #e6dafa"}}>
          <h2 style={{color:"#f9f9f9"}}>Eduardo Ugalde López - Frontend Developer</h2>
      </div>
      <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50vh", justifyContent:"center", alignItems:"center"}}>
        <div style={{display:"flex", minWidth:"300px", width:"30%", height:"5vh", justifyContent:"center",alignItems:"center", borderRadius:"5px", border:"1px solid #f9f9f9", marginBottom:"1%", cursor:"pointer"}} onClick={GoAddress('https://gif-finder-by-giphy.netlify.app/')} title='Proyecto hecho en React JS, renderizado dinámico de hasta 10 imágenes gif en cada búsqueda'>
          <a style={{color: "#f9f9f9", display: "flex", alignItems: "center"}}>
            <img src={giffinderimg} style={{width: "25px", cursor: "pointer", marginRight: "5px"}}/>
            <span>Gif Finder (powered by Giphy)</span>
          </a>
        </div>
        <div style={{display:"flex", minWidth:"300px", width:"30%", height:"5vh", justifyContent:"center",alignItems:"center", borderRadius:"5px", border:"1px solid #f9f9f9", marginBottom:"1%", cursor:"pointer"}} onClick={GoAddress('https://donandoando.000webhostapp.com/inicio')} title='Proyecto altruista el cual busca ayudar a comunidades en situación de vulnerabilidad, hecho en React JS con un formulario que envía correos usando la herramienta de backend-as-a-service emailjs'>
          <a style={{color: "#f9f9f9", display: "flex", alignItems: "center"}}>
            <img src={donandoandoimg} style={{width: "30px", cursor: "pointer", marginRight: "5px"}} className="svg-icon"/>
            <span>Donando Ando</span>
          </a>
        </div>
        <div style={{display:"flex", minWidth:"300px", width:"30%", height:"5vh", justifyContent:"center",alignItems:"center", borderRadius:"5px", border:"1px solid #f9f9f9", marginBottom:"1%", cursor:"pointer"}} onClick={GoAddress('https://deluxe-unicorn-0e7a53.netlify.app/')} title='Pequeña demo visual (No tiene backend) de un sistema de administración de productos y almacenes hecho en React JS'>
          <a style={{color: "#f9f9f9", display: "flex", alignItems: "center"}}>
            <img src={cartimg} style={{width: "25px", cursor: "pointer", marginRight: "5px"}} className="svg-icon"/>
            <span>Gestor de Productos (DEMO)</span>
          </a>
        </div>
        <div style={{display:"flex", minWidth:"300px", width:"30%", height:"5vh", justifyContent:"center",alignItems:"center", borderRadius:"5px", border:"1px solid #f9f9f9", marginBottom:"5%", cursor:"pointer"}} onClick={GoAddress('https://autoevalua.xyz')} title='Proyecto de titulación hecho en React JS con backend php y python, este proyecto se enfoca en la educación a distancia en la asignatura de matemáticas en 6to año del nivel primaria, con perfiles de alumno y profesor, el profesor crea examenes interactivos que serán resueltos por el alumno y serán calificados automáticamente por medio de machine learning, otorgando una calificación de 0 a 1 en cada pregunta y mostrando una calificación promedio en cada examen, además el profesor consultará dashboards sobre el rendimiento de los alumnos en cada prueba'>
          <a style={{color: "#f9f9f9", display: "flex", alignItems: "center"}}>
            <img src={conocimientoimg} style={{width: "25px", cursor: "pointer", marginRight: "5px"}} className='png-icon'/>
            <span>Auto Evalúa</span>
          </a>
        </div>
        <div style={{display:"flex", minWidth:"300px", width:"30%", height:"5vh", justifyContent:"center",alignItems:"center", borderRadius:"5px", border:"1px solid #f9f9f9", marginBottom:"1%", cursor: "pointer"}}  onClick={handleOpenCV} title='Descargar CV'>
          <a style={{color: "#f9f9f9", display: "flex", alignItems: "center"}}>
            <img src={downloadimg} style={{width: "25px", cursor: "pointer", marginRight: "5px"}} />
            <span>Visualizar CV</span>
          </a>
        </div>
      </div>
      <div style={{width:"100%", flexDirection:"row", justifyItems:"center", alignItems:"center", borderTop:"2px solid #e6dafa", marginBottom:"25px"}}>
          <h3 style={{color:"#f9f9f9"}}>Contacto:</h3>
              <a href='https://www.linkedin.com/in/eduardo-ugalde/' style={{color: "#f9f9f9", marginLeft: "5px"}}>
                <img src={linkedin} style={{width: "25px", cursor: "pointer"}}/>
              </a>
              <a href='https://github.com/eduu101' style={{color: "#f9f9f9"}}>
                <img src={github} style={{width: "25px", cursor: "pointer", marginLeft: "5px"}}/>
              </a>
              <a href='mailto:eduardo.ugalde.lopez1@gmail.com' style={{color: "#f9f9f9"}}>
                <img src={email} style={{width: "25px", cursor: "pointer", marginLeft: "5px"}}/>
              </a>
        </div>
        <div style={{width:"100%", flexDirection:"row", justifyItems:"center", alignItems:"center", borderTop:"2px solid #e6dafa"}}>
          <h5 style={{color:"#f9f9f9"}}>Made with ❤️ by Eduardo Ugalde López using  React JS</h5>
        </div>
      {open && ReactDOM.createPortal(
        <ModalComponent
          isOpen={open}
          onRequestClose={() => setOpen(false)}
        >
          <iframe
              src={curriculum}
              width="100%"
              height="95%"
              title='CV'
          />
        </ModalComponent>,
        document.body
      )}
    </>
  )
}

export default App
