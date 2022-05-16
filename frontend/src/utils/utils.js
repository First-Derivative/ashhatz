export const getCookie = (name) => {
  let cookies = document.cookie.split(';');
  for(let i=0 ; i < cookies.length ; ++i) {
      let pair = cookies[i].trim().split('=');
    if(pair[0] === String(name)){
      return pair[1];
    }
  }
  return null;
};