
import './App.css';
import Person from './Person'
import MyComponent from './MyComponent'

function App() {
  return (
    <div className="App">
     <h1>Hello World</h1>
     <Person  name="Nina" age={29} />
     <Person name="Kevin" age={27}/>
     
     <MyComponent country="Kenya" />
    </div>
  );
}

export default App;
