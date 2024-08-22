interface Props {
  text: string;
  onClick: ()=> void;
}
const Button = ({text,onClick}: Props) => {
  return (
    <>
      <button className="btn btn-dark" onClick = {onClick}>{text}</button>
    </>
  );
};

export default Button;
