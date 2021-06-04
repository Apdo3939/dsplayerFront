import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL, headerInfo, PlayerMusics} from "../services/api"
import PlayList from "./components/PlayList";
import PlaylistHeader from "./components/PlaylistHeader";

const Player = () => {

    const [player, setPlayer] = useState<PlayerMusics>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${BASE_URL}/musics`)
            .then((response) => {
                console.log(response.data);
                const data = response.data;
                setPlayer(data);
            }
            )
            .catch(() => setError(error))
            .finally(() => setIsLoading(false));
    }, [error]);

    if (isLoading) {
        return <p>Carregando as musicas...</p>;
      }
    
      if (error || !Array.isArray(player)) {
        return <p>Há um erro de carregamento na suas músicas!!!</p>;
      }

    return (
        <div className="player-container">
            <PlaylistHeader {...headerInfo} />
            {isLoading ?
                (<h1>Carregando as musicas...</h1>) :
                (player.map((play) => (
                    <PlayList playerMusics={play} key={play.id} />
                )))
            }
        </div>
    );
};

export default Player;