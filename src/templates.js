function formPage(errors = {}, values = {}) {
  const title = 'All posts';
  const content = /*html*/ `
    <h2>New post</h2>
    <div class="form-container">
      <form method="POST">
        
          <label for="venueName">Venue Name</label>
          <input
            id="venueName"
            name="venueName"
            value="${values.venueName ? sanitize(values.venueName) : ''}"
          >
          ${validation(errors.venueName)}
        
        
          <label for="address">Street address</label>
          <input
            id="address"
            name="address">
              ${values.address ? sanitize(values.address) : ''}
            </input>
          ${validation(errors.address)}
          
          <label for="borough">borough</label>
          <input
            id="borough"
            name="borough">
              ${values.borough ? sanitize(values.borough) : ''}
            </input>
          ${validation(errors.borough)}
          <label for="postcode">postcode</label>
          <input
            id="postcode"
            name="postcode">
              ${values.postcode ? sanitize(values.postcode) : ''}
            </input>
          ${validation(errors.postocode)}

          <label for="cuisine">cuisine</label>
          <input
            id="cuisine"
            name="cuisine">
              ${values.cuisine ? sanitize(values.cuisine) : ''}
            </input>
          ${validation(errors.cuisine)}
        <button>Send</button>
      </form>
      </div>
    
  `;
  return layout(title, content);
}

{
  /* CODE FOR ROWS IN TABLE
   */
}

function sanitize(unsafe) {
  return unsafe /* .replace(/</g, "&lt;") */;
}

function validation(message) {
  if (message) {
    return `<span style="color: red">${message}</span>`;
  } else {
    return '';
  }
}

function postItem(post) {
  return `
  <p>${sanitize(post.venue_name)} | ${sanitize(post.location_street)}</p>
  `;
}

function homePage(posts, errors = {}, values = {}) {
  const title = 'All restaurants and streets';
  const content = /*html*/ `
      <h2>All posts</h2>
      <ul>
        ${posts.map(postItem).join('')}
      </ul>
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
