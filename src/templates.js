function formPage(errors = {}, values = {}) {
  const title = "All posts";
  const content = /*html*/ `
    <h2>New post</h2>
    <div class="form-container">
      <form method="POST">
        
          <label for="venueName">Venue Name</label>
          <input
            id="venueName"
            name="venueName"
            value="${values.venueName ? sanitize(values.venueName) : ""}"
          >
          ${validation(errors.venueName)}
            </input>
        
          <label for="address">Street address</label>
          <input
            id="address"
            name="address">
              ${values.address ? sanitize(values.address) : ""}
            </input>
          ${validation(errors.address)}
          
          <label for="borough">Borough</label>
          <input
            id="borough"
            name="borough">
              ${values.borough ? sanitize(values.borough) : ""}
            </input>
          ${validation(errors.borough)}
          <label for="postcode">Postcode</label>
          <input
            id="postcode"
            name="postcode">
              ${values.postcode ? sanitize(values.postcode) : ""}
            </input>
          ${validation(errors.postocode)}

          <label for="cuisine">Cuisine</label>
          <input
            id="cuisine"
            name="cuisine">
              ${values.cuisine ? sanitize(values.cuisine) : ""}
            </input>
          ${validation(errors.cuisine)}
        <button>Send</button>
      </form>
      
      <form action="/" method="get" >
        <button type="submit" >Show All Restuarants</button>
      </form>
      
      </div>

    
  `;
  return layout(title, content);
}


function sanitize(unsafe) {
  return unsafe /* .replace(/</g, "&lt;") */;
}

function validation(message) {
  if (message) {
    return `<span style="color: red">${message}</span>`;
  } else {
    return "";
  }
}

function postItem(post) {
  return `
  <p>
    ${sanitize(post.venueName)} |
    ${sanitize(post.address)} |
    ${sanitize(post.borough)} |
    ${sanitize(post.postcode)} |
    ${sanitize(post.cuisines)}
  </p>
  `;
}


{/*TO ADD LATER <form method="GET">
<p><input type="search" name="search" value="${search}"></p>
<p><button>Search</button></p>
</form> */}
function homePage(posts, errors = {}, values = {}) {
  const title = "All restaurants and streets";
  const content = /*html*/ `
      <h2>All restaurants</h2>
      <ul>
        ${posts.map(postItem).join("")}
      </ul>
      <form action="/submit" method="get" >
        <button type="submit" >Add a restaurant</button>
      </form>
    `;
  return layout(title, content);
}

function layout(title, content) {
  return /*html*/ `
    <!doctype html>
    <html>
      <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
         <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" type="text/css" href="normalize.css"/>
        <link rel="stylesheet" type="text/css" href="style.css"/>
      </head>
      <body>
        ${content}
      </body>
    </html>
  `;
}

module.exports = { formPage, homePage };
