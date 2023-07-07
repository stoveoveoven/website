type HeadingProps = {
  text: string;
};

export const Heading = (props: HeadingProps) => {
  return (
    <div className="text-5xl font-bold pb-5 uppercase leading-tight">
      {props.text}
    </div>
  );
};
