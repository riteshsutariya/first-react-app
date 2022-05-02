import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Person from './components/Person';
/*const person={
  firstName:'ritesh',
  lastName:'sutariya'
}*/

function App() {
  return (
    <>
    <Navbar/>   
    {/* <Person obj={person}/>  */}
    <TextForm heading="this is heading"/>
    </>
  );
}

export default App;
