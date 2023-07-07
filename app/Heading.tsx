type HeadingProps = {
  text: string;
};

export const Heading = (props: HeadingProps) => {
  return (
    <div className="text-5xl font-bold uppercase leading-tight">
      {props.text}
    </div>
  );
};
