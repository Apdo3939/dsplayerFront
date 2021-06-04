import { useState } from "react";
import { PlayerMusics } from "../../services/api";
import { liked, noliked } from "../../assets/images/buttons";

type Props = {
    playerMusics: PlayerMusics;
}

const PlayList = ({ playerMusics }: Props) => {

    const [isLiked, setIsLiked] = useState(false);

    const handlelike = () => {
        setIsLiked(!isLiked);
    };

    return (
        <div className="music-container">
            <div className="music-content">
                <img src={playerMusics.coverUrl} alt={playerMusics.title} className="music-cover" />
                <div className="music-name">
                    <h4>{playerMusics.title}</h4>
                    &nbsp;-&nbsp;
                    <h6>{playerMusics.albumName}</h6>
                </div>
                <button
                    onClick={() => handlelike()}
                    className="button-like">
                    <img src={isLiked ? liked : noliked}
                        alt="Like"
                        className="like" />
                </button>
            </div>
        </div>

    );
}

export default PlayList;