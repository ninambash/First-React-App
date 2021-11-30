
// props stand for properties, which are like the input for a component

function Person(props) {
  return (
    <div className="nina Person">
     <h1>My name is { props.name }</h1>
     <p>I am {props.age} years old</p>
    </div>
  );
}

export default Person;
