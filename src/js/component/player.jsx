import React, {useState} from "react";

//create your first component
const Player = () => {
	// useState(). // retorna una arrary [variable, funcion que modifica la variabgle]
	// const [variale, funcion que me modifca esa. variable] = useState( el valor incial de mi estaod o variable)
	const [backBackground, setBackBackground] = useState('grey')
    const [playBackground, setPlayBackground] = useState('grey')

    function back(){
        if(backBackground == 'green' ){
            setBackBackground('grey')
        }else{
            setBackBackground('green')
            setPlayBackground('grey')
        }
    }

    function play(){
        if(playBackground == 'green' ){
            setPlayBackground('grey')
        }else{
            setPlayBackground('green')
            // si play esta en verde colocar lols otros grtis
            setBackBackground('grey')
        }

    }

	return (
		<div className="text-center">
			<button onClick={back} style={{backgroundColor: backBackground}} >Anterior</button>
            <button onClick={play} style={{backgroundColor: playBackground}}>Play</button>
            <button >Stop</button>
            <button >Siguiente</button>
		</div>
	);
};

export default Player;
