function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

async function follow(username){
  const cookie = await getCookie("scratchcsrftoken");

  $.ajax({
    type: "PUT",
    url: "https://scratch.mit.edu/site-api/users/followers/" + username + "/add/",
    data: { usernames: username },
    headers: {
      "x-csrftoken": cookie?.value,
    }
  });
}

