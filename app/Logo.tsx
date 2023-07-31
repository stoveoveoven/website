import Image from "next/image";
type LogoProps = {
  src: string;
  alt: string;
  href: string;
};

export const Logo = (props: LogoProps) => {
  return (
    <a href={props.href} target="_blank">
      <Image src={props.src} alt={props.alt} className="w-10 fill-blue-300 " />
    </a>
  );
};
