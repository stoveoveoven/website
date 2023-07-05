type HeadingProps = {
  text: string;
};

export const Heading = (props: HeadingProps) => {
  return <div className="text-3xl font-bold mb-5">{props.text}</div>;
};
