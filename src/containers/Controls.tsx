import cover from '../assets/images/cover/cradles.jpg';

import { next, pause, play, prev, stop } from "../assets/images/buttons";
import ControlButton from './components/ControlButton';
import { useState } from 'react';


const Controls = () => {

    const [isPaused, setIsPaused] = useState(false);

    const handleplay = () => {
        setIsPaused(!isPaused);
    };

    return (
        <div className="control-container">
            <img
                src={cover}
                alt="Capa do album"
                className="control-current" />
            <div className="buttons-container">
            <ControlButton >
                <img
                    src={prev}
                    alt="Anterior"
                    className="control-button-icon" />
            </ControlButton>
            <ControlButton >
                <img
                    src={stop}
                    alt="parar"
                    className="control-button-icon" />
            </ControlButton>
            <ControlButton onClick={() => handleplay()} >
                <img
                    src={isPaused ? pause : play}
                    alt="Pausar e tocar"
                    className="control-button-icon" />
            </ControlButton>
            <ControlButton >
                <img
                    src={next}
                    alt="Próximo"
                    className="control-button-icon" />
            </ControlButton>
            </div>
        </div>
    );
};

export default Controls;