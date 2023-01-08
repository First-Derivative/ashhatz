const getCookie = (name: string): string => {
  let cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; ++i) {
    let pair = cookies[i].trim().split("=");
    if (pair[0] === String(name)) {
      return pair[1];
    }
  }
  return "";
};

export default getCookie