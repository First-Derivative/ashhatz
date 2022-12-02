import React, { useState, useEffect } from "react"
import ErrorAlert from "./ErrorAlert";
import axiosInstance from "../../utils/axios";
import { AxiosError } from "axios"
import getCookie from "../../utils/getCookie"

function CSRFToken() {

  const [token, setToken] = useState<string>("");
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {

    axiosInstance.get("employee/auth/getcsrf").then((res) => {
      if (res) {
        setToken(getCookie("csrftoken"))
      }
    }).catch((err: Error | AxiosError) => {
      setError(true)
    });

  }, [])

  return (
    <>
      {error ? (<ErrorAlert styling={"col-6 mx-auto my-auto"} message={"Could not get CSRF Token"} />)
        : (<input type="hidden" name="csrfmiddlewaretoken" value={token} />)}
    </>
  )
}

export default CSRFToken