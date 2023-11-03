import React, {useState} from "react";

//create your first component
const Home = () => {
	// useState(). // retorna una arrary [variable, funcion que modifica la variabgle]
	// const [variale, funcion que me modifca esa. variable] = useState( el valor incial de mi estaod o variable)
	const [data, setData] = useState(1)
	const [click, setClick] = useState(0)


	function agregar(){
		console.log('agregar')
		setData( data + 1)
		setClick(click + 1)
	}

	function quitar(){
		console.log('quitar')
		setData( data - 1)
		setClick(click + 1)

	}
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hola Bienvenidos a React Hooks!</h1>
			<button onClick={agregar}>Agregar</button>
			<p> {data} </p>
			<button onClick={quitar}>Quitar</button>
			<p> modificaste data {click} veces </p>
		</div>
	);
};

export default Home;
