import './App.css'


const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {

  const elemento = (
    <div> 
      <h1>Que imbecil</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  )
  root.render(elemento)
   return (
   
     <h1>Hola chiquillos, mira esta vaina: {elemento}</h1>
    
   )
}

setInterval(App, 1000);

export default App
