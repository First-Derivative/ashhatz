import { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('Ashraff Hatz');
  const [btnalert, setBtnalert] = useState(false);

  const handleClick = (e) => {
    
    if (name === 'Ash') {
      return setBtnalert(true);
    }
    return setName('Ash');
  }

  return (
    <div className="container-fluid p-5" id="app-container">
      <div className="row">

        <div className="col-12 col-sm-6 text-start px-5" id="profile-container" >
          <div className="h1" id="name">{name}</div>
          <button 
          className="btn btn-highlight-fill fst-italic my-3" 
          id="name-button"
          onClick={handleClick}
          >
            Call me Ash -it's easier.
          </button>
          { btnalert ?  
            <div className='d-inline ms-3' id="button-alert">
              - There's no going back, it's Ash forever.
            </div> 
          : '' }
          <div className="p my-5">
            Developer. Dungeon Delver. <br/> Pokemon Master
          </div>
        </div> 

      </div>
    </div>
  );
}

export default App;
