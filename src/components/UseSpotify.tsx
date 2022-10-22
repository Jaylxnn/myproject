import { useLanyard } from "use-lanyard";
export const DISCORD_ID = "363571068012593156";

export function SpotifySong() {
  const { data: lanyard } = useLanyard(DISCORD_ID);

  if (!lanyard || !lanyard.spotify) {
    return null;
  }

  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={`https://open.spotify.com/track/${lanyard.spotify.track_id}`}
      className="bg-neutral-900 sm:flex md:inline-flex items-center mt-2 ml-2 pt-1 pb-2 pl-2 pr-2 rounded-lg"
    >
      <div>
        <img
          src={`${lanyard.spotify.album_art_url}`}
          className="rounded-md mt-2 h-[40px] w-[40px] md:h-[55px] md:w-[55px]"
        ></img>
      </div>
      <div className="ml-2">
        <span className="text-[#1ed760] font-semibold text-sm">
          Listening to...
        </span>
        <h1 className="font-bold text-sm opacity-90">{lanyard.spotify.song}</h1>
        <span className="text-base opacity-80">{lanyard.spotify.artist}</span>
      </div>
    </a>
  );
}
