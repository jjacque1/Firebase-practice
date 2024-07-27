import './App.css';
import { auth } from './Firebase/init';
import { createUserWithEmailAndPassword } from 'firebase/auth';
function App() {
  function register() {
    createUserWithEmailAndPassword(auth, 'email@email.com','test123')
    .then((user) => {
      console.log(user)
    })
    .catch((error) => {
      console.log(error);
    })
  }
  return (
    <div className="App">
      <button onClick={register}>Register</button>
    </div>
  );
}

export default App;
