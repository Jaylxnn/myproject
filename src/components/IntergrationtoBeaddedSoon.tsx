import useSWR from "swr";
import * as React from 'react';
import { SpotifyData } from "../types/spotify";
import { SiSpotify } from "react-icons/si";

export const SpotifySong = (): JSX.Element | null => {
  const { data } = useSWR<SpotifyData>("/api/spotify");
  if (!data || data.isPlaying === false) return null;

  console.log(data);

  return (
    <div className="bg-neutral-900 inline-flex items-center mt-2 md:mt-0 md:ml-2 pt-2 pb-2 pl-2 pr-2 rounded-lg">
      <img
        alt={`${data.title}`}
        src={`${data.albumImageUrl}`}
        className="rounded-md h-[64px] w-[64px]"
      />
      <div className="ml-2">
        <span className="text-[#1ed760] font-semibold text-sm">
          <SiSpotify />
          <p>Listening to...</p>
        </span>
        <h1 className="font-bold text-sm opacity-90">{data.title}</h1>
        <span className="opacity-80 text-base">{data.artist}</span>
      </div>
    </div>
  );
};
