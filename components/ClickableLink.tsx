import type React from "react";

interface Props {
  link: string;
  openInNewTab?: boolean;
  children: React.ReactNode;
}

export function ClickableLink({ link, openInNewTab, children }: Props) {
  return (
    <a
      href={link}
      target={openInNewTab ? "_blank" : undefined}
      className="text-[#635bff] hover:text-[#635bff] w-fit relative clickable-link"
    >
      {children}
    </a>
  );
}
