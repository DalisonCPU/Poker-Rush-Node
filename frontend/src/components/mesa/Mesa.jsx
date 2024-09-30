import { useState } from 'react'
import './Mesa.css'

export default function Mesa() {

    const [jogadores, setJogadores] = useState([])

    return (
        <div className='mesa'>
            <div className='jogadores'>
                <h2>Jogadores</h2>
                <div>Fulaninho</div>
                <div>Ciclaninho</div>
            </div>
            <div className='cartasComunitarias'>
                <h3>Cartas comunitárias</h3>
                <div>10 de Copas</div>
                <div>Valete de Copas</div>
                <div>Dama de Paus</div>
                <div>Rei de Espadas</div>
                <div>Ás de Ouros</div>
            </div>

            <div className='stack'>10 000</div>
            <div className='acoes'>
                <button>Call</button>
                <button>Raise</button>
                <button>All-in</button>
                <button>Fold</button>
            </div>
        </div>
    )
}
