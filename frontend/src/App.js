import { useState, useEffect } from 'react';
import icon_link from './assets/favicon.ico';
import mobile_icon_link from './assets/logo192.png';
import manifest_link from './assets/manifest.json';
import './App.css';

function App() {

  const [name, setName] = useState('Ashraff Hatz');
  const [btnalert, setBtnalert] = useState(false);
  const [csrf, setcsrf] = useState('');

  const handleClick = (e) => {
    
    if (name === 'Ash') {
      return setBtnalert(true);
    }
    return setName('Ash');
  }

  const getCookie = (name) => {
    console.log("getting cookie from document.cookie", document.cookie)
    let cookieValue = null;
    console.log(cookieValue)
    if (document.cookie && document.cookie !== '') {
      console.log("trying to get document.cookie")
      let cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
  

  useEffect( ()=> {
    console.log("getting fetch")
    fetch('http://127.0.0.1:8000/users/getcsrf/').then( response => { 
      console.log(response); 
      setcsrf(getCookie('csrftoken'));
      console.log("document cookies:", document.cookie);
      console.log("csrf state:", csrf)
      return response.json()})
   .catch( err => console.log(err));
  }, [])

  // Set Icons & Manifest
  useEffect(() => {
    const favicon = document.getElementById('favicon');
    const manifest = document.getElementById('manifest');
    const mobile_icon = document.getElementById('mobile-icon');

    favicon.setAttribute('href', icon_link);
    mobile_icon.setAttribute('href', mobile_icon_link)
    manifest.setAttribute('href', manifest_link)
  }, []);


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
