import React, { useState, useEffect} from 'react'
import ErrorAlert from './ErrorAlert';
import axiosInstance from '../utils/axios';
import { getCookie } from '../utils/utils'

function CSRFToken() {

  const [token, setToken] = useState('');
  const [error, setError] = useState(false)

  useEffect( () => {

    axiosInstance.get('employee/auth/getcsrf').then( (res) => {
      if(res){
        setToken(getCookie('csrftoken'));
      }
    }).catch( (err) => {
      setError(true)
    });

  }, [])

  return (
    <>
    { error ? ( <ErrorAlert styling={"col-6 mx-auto my-auto"} message={"Could not get CSRF Token"}/> )
    : ( <input type='hidden' name='csrfmiddlewaretoken' value={token} /> )}
    </>
  )
}

export default CSRFToken