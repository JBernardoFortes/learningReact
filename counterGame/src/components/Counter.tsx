interface Props {
  count: number;
}

const Counter = ({ count }: Props) => {
  return <div className ='counter'><span>Counter : {count}</span></div>;
};

export default Counter;
