"use client";

type LinkProps = {
  href: string;
  text: string;
};

export const Link = (props: LinkProps) => {
  return (
    <a
      href={props.href}
      target="_blank"
      className="text-2xl font-bold underline "
    >
      {props.text}
    </a>
  );
};
