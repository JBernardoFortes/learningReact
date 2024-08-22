import { useState } from "react";
// import { Fragment } from "react";
interface Props {
  items: string[];
  heading: string;
}
// When using props it is recommended to make a interface with Typescript to set the object
// It is better to use a object as pros bc it can store as many variables as possible, making the code cleaner

function ListGroup(props: Props) {
  // In react a component cannot return more than one element
  // To return more than one element in react component you need to :
  // - Wrap all elements in a div element -> not recommended bc u are adding a new element just for react
  // - Use Fragments -> recommeded

  //   return (
  //     // React.createElement('') vv
  //     // Using a div to wrap everything
  //     //     <div>
  //     // <h1> list</h1>
  //     //       <ul className="list-group">
  //     //         <li className="list-group-item">An item</li>
  //     //         <li className="list-group-item">A second item</li>
  //     //         <li className="list-group-item">A third item</li>
  //     //         <li className="list-group-item">A fourth item</li>
  //     //         <li className="list-group-item">And a fifth one</li>
  //     //       </ul>
  //     //     </div>

  //     // Using fragments
  //     //  <Fragment>
  //     //    <h1> list </h1>
  //     //    <ul className="list-group">
  //     //      <li className="list-group-item">An item</li>
  //     //      <li className="list-group-item">A second item</li>
  //     //      <li className="list-group-item">A third item</li>
  //     //      <li className="list-group-item">A fourth item</li>
  //     //      <li className="list-group-item">And a fifth one</li>
  //     //    </ul>
  //     //  </Fragment>

  //     // Easier way to use fragments :
  //     // Using like this, makes the import unnecessary
  //     <>
  //       <h1> list </h1>
  //       <ul className="list-group">
  //         <li className="list-group-item">An item</li>
  //         <li className="list-group-item">A second item</li>
  //         <li className="list-group-item">A third item</li>
  //         <li className="list-group-item">A fourth item</li>
  //         <li className="list-group-item">And a fifth one</li>
  //       </ul>
  //     </>

  //   );
  // Dinamically rendering lists :

  //   items = [];
  //   const message = items.length < 1 ? <p> The list is empty</p> : null; // The logic may turn the code in a mess, so is recommeded to move it to a variable
  const getMessage = () => {
    // Using a function is better bc you can have parameters
    return props.items.length < 1 ? <p> The list is empty</p> : null;
  };

  const [selectedIndex, setSelectedIndex] = useState(-1);
  // O primeiro index eh o valor da variavel
  // O segundo index eh uma funcao para atualizar esse valor

  return (
    <>
      <h1> {props.heading} </h1>
      {getMessage() /* {items.length < 1? <p>The list is empty</p> : null} */}
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
          // the function inside the arrowfunction is wrapped in parenthesis!!
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
