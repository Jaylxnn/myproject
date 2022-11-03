import { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className="dark:text-white antialiased bg-ThemeDark bg-auto">
      <div className="mx-auto max-w-4xl py-10 px-5">

        <Component {...pageProps} />
      </div>
    </div>
  );
}
