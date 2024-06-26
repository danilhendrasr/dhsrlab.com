import { ClickableLink } from "./ClickableLink";

export function Footer() {
  return (
    <footer className="w-screen flex flex-col gap-y-5 md:flex-row justify-between items-center py-8 border-t border-t-slate-300 text-sm max-w-[1200px] mx-auto px-10 text-slate-600">
      <ul className="flex gap-5">
        <li>
          <ClickableLink link="/">Home</ClickableLink>
        </li>
        <li>
          <ClickableLink link="/about">About</ClickableLink>
        </li>
        <li>
          <ClickableLink link="https://indentasi.dhsrlab.com" openInNewTab>
            Blog
          </ClickableLink>
        </li>
      </ul>
      <div>&copy; 2024 Danil Hendra Suryawan.</div>
    </footer>
  );
}
