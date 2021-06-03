import { PlayerMusics } from "../../services/api";

type Props = {
    playerMusics:  PlayerMusics;
}

const PlayList = ({playerMusics}: Props) => {

    return (
        <div className="music-container">
           <h1>Musicas Carregadas!</h1>
        </div>

    );
}

export default PlayList;