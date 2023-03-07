function getCookie(name) {
    const cookieStr = document.cookie;
    const cookies = cookieStr.split('; ');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].split('=');
      if (cookie[0] === name) {
        return decodeURIComponent(cookie[1]);
      }
    }
    return null;
  }

function DeleteCookie() {
  document.cookie = "accessToken =; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
function setCookie(value){
  const d = new Date();
  d.setTime(d.getTime() + (90*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = "accessToken =" + value + ";" + expires + ";path=/";
}
  export{ getCookie,DeleteCookie,setCookie};