interface Props {
  onClick: (n: any) => void;
  counter: number;
  text: String;
}
export const Button = (props: Props) => {
  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          props.onClick(props.counter);
        }}
      >
        {" "}
        {props.text}{" "}
      </button>
    </div>
  );
};
export default Button;
