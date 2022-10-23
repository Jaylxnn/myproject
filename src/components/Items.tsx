import type { ReactNode } from "react";
import type { IconType } from "react-icons";

type Props = {
  text: ReactNode;
  icon: IconType;
};

export function ListItem({ icon, text }: Props) {
  return (
    <li className="flex items-center space-x-2">
      <span>{icon({ className: "h-6 w-6" })}</span>
      <span>{text}</span>
    </li>
  );
}

export function Spotify({ icon, text }: Props) {
  return (
    <li className="flex items-center space-x-1">
      <span>{icon({ className: "h-4 w-4" })}</span>
      <span>{text}</span>
    </li>
  );
}

export function DisplayItem({ icon }: Props) {
  return <span>{icon({})}</span>;
}
