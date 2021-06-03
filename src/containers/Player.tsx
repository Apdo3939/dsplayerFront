import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { BASE_URL, headerInfo, PlayerResponse } from "../services/api"
import PlayList from "./components/PlayList";
import PlaylistHeader from "./components/PlaylistHeader";

const Player = () => {

    const [playerResponse, setPlayerResponse] = useState<PlayerResponse>();
    const [isLoading, setIsLoading] = useState(false);

    const getPlayers = useCallback(() => {
        setIsLoading(true);
        axios.get(`${BASE_URL}/musics`)
            .then((response) => {
                console.log(response.data);
                const data = response.data;
                setPlayerResponse(data.content);
            }
            )
            .catch(() => console.log("Hove erro na requisição!"))
            .finally(() => setIsLoading(false))
    }, [])

    useEffect(() => {
        getPlayers();
    }, [getPlayers]);

    return (
        <div className="player-container">
            <PlaylistHeader {...headerInfo} />
            {playerResponse?.content &&(setPlayerResponse(playerResponse))}
            {isLoading ?
                (<h1>Carregando as musicas...</h1>) :
                (playerResponse?.content.map((play) => (
                    <PlayList playerMusics={play} key={play.id} />
                )))
            }
        </div>
    );
};

export default Player;