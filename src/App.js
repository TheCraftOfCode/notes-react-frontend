import { useEffect, useState } from 'react';
import './App.css';
import "./components/LoginSignUp"
import LoginSignUp from './components/LoginSignUp';
import Notes from "./components/Notes"

function App() {

  const [page,setPage] = useState();

  const handlePage = () => {
    if(localStorage.getItem("token")) setPage(<Notes handlePage={handlePage}/>)
    else setPage(<LoginSignUp handlePage={handlePage}/>)
  }

  useEffect(() => {
    handlePage()
  },[])

  return (
    <div className="App">
      {page}
    </div>
  );
}

export default App;
