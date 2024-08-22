// When writing in react is recommended to write in PascalCasing ( First letter as upper case )
function Message() {
  const name = 'Bernardo';
  if (name) {
    return <h1>Hello {name}</h1>;
  } else {
    return <h1> Hello World</h1>;
  }
}
export default Message;
