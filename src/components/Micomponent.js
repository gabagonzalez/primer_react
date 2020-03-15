import React, {Component} from 'react';

class Micomponent extends Component{

    render(){
        let info = {
            name: "Ecotips",
            secciones: ['Estilo de vida',' Hogar',' Transporte'],
            cantidad: 10
        };


        return (
            <div className="mi-componente">
                <h1> {info.name}</h1>
                <h2>{info.secciones}</h2>
                <hr/>
                <h3>Cantidad por sección: {info.cantidad} {info.name}</h3>
                <ol>
                {
                    info.secciones.map((secciones, i) => {
                        console.log(secciones);
                        return (
                            <li key={i}>
                                {secciones}
                            </li>

                        );
                    })
                }
                </ol>
            </div>
        );
    }
}

export default Micomponent;