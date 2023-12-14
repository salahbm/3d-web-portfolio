import { soundoff, soundon } from "../assets/icons";

const Music = ({ isPlayingSong, setIsPlayingSong }) => {
  return (
    <div className=" flex items-center">
      <img
        src={isPlayingSong ? soundon : soundoff}
        alt="SoundOn"
        className="md:w-10 md:h-10 w-7 h-7 cursor-pointer object-contain"
        onClick={() => setIsPlayingSong(!isPlayingSong)}
      />
    </div>
  );
};

export default Music;
