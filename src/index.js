// conexion entre la app react y el navegador 
// 1- necesitamos la variable react en scope

import React from 'react'

// 2- necesitamos la variable reactDOM en scope

import ReactDOM from 'react-dom'

// 3- necesitamos un componente en scope
import App from './App.js'
import "./style.css"

//const App = () => "Hola Mundo"

// 4- necesitamos poner el componente en el dom
//funcion que renderiza en el dom a: el componente que contiene al resto, b: donde queres mostrar el componente
//ReactDOM.render(a,b) 
//ReactDOM.hydrate()
ReactDOM.render(<App/>,document.getElementById("root"))

