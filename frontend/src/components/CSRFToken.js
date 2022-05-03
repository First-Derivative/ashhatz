import React, { useState, useEffect} from 'react'

function CSRFToken() {

  const [token, setToken] = useState('');

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

  useEffect( () => {

    let getCSRF = async () => {

      let response = await fetch(`${process.env.BACKEND_URL}/employee/auth/getcsrf`)
      let data = await response.json()
      console.log(data)
      if(document.cookie !== '') {
        setToken(getCookie('csrftoken'));
      } else {
        console.log("cookies not being set")
      }
    }

    getCSRF();

    /*
    const url = process.env.REACT_APP_BACKEND_URL // Get BACKEND_URL from .env unless in deployment
    fetch(`${url ? url : '/'}users/getcsrf/`).then( response => { 
      console.log(response); 
      setcsrf(getCookie('csrftoken'));
      console.log("document cookies:", document.cookie);
      console.log("csrf state:", csrf)
      console.log(response)})
   .catch( err => console.log(err));
    */

  }, [])

  return (
    <input type='hidden' name='csrfmiddlewaretoken' value={token} />
  )
}

export default CSRFToken