import './App.css';
import "./components/LoginSignUp"
import LoginSignUp from './components/LoginSignUp';

function App() {


  return (
    <div className="App">
      {
        // if JWT token
        //    <Notes />
        // else
        //    <Login SignUp />
      }
      <LoginSignUp />
      
    </div>
  );
}

export default App;
