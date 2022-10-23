import { Spotify } from "./Items";
import { useLanyard } from "use-lanyard";
import { SiSpotify } from "react-icons/si";
export const DISCORD_ID = "363571068012593156";

export const SpotifySong = (): JSX.Element | null => {
  const { data: lanyard } = useLanyard(DISCORD_ID);

  if (!lanyard || !lanyard.spotify) {
    return null;
  }

  return (
    <div className="bg-neutral-900 inline-flex items-center mt-2 md:mt-0 md:ml-2 pt-2 pb-2 pl-2 pr-2 rounded-lg">
      <img
        alt={`${lanyard.spotify.song}`}
        src={`${lanyard.spotify.album_art_url}`}
        className="rounded-md h-[64px] w-[64px]"
      />
      <div className="ml-2">
        <span className="text-[#1ed760] font-semibold text-sm">
          <Spotify icon={SiSpotify} text="Listening to..." />
        </span>
        <h1 className="font-bold text-sm opacity-90">{lanyard.spotify.song}</h1>
        <span className="opacity-80 text-base">{lanyard.spotify.artist}</span>
      </div>
    </div>
  );
};
