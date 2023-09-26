function home(posts, errors = {}, values = {}) {
  const title = "All posts";
  const content = /*html*/ `
    <h2>New post</h2>
    <form method="POST">
      <p>
        <label for="venueName">Venue Name</label>
        <input
          id="venueName"
          name="venueName"
          value="${values.venueName ? sanitize(values.venueName) : ""}"
        >
        ${validation(errors.venueName)}
      </p>
      <p>
        <label for="address">Street address</label>
        <input
          id="address"
          name="address">
            ${values.address ? sanitize(values.address) : ""}
          </input>
        ${validation(errors.address)}
        </p>
        <p>
        <label for="borough">borough</label>
        <input
          id="borough"
          name="borough">
            ${values.borough ? sanitize(values.borough) : ""}
          </input>
        ${validation(errors.borough)}
        </p>
        <p>
        <label for="postcode">postcode</label>
        <input
          id="postcode"
          name="postcode">
            ${values.postcode ? sanitize(values.postcode) : ""}
          </input>
        ${validation(errors.postocode)}
        </p>

        <p>
        <label for="cuisine">cuisine</label>
        <input
          id="cuisine"
          name="cuisine">
            ${values.cuisine ? sanitize(values.cuisine) : ""}
          </input>
        ${validation(errors.cuisine)}
        </p>
      <button>Send</button>
    </form>
    
  `;
  return layout(title, content);
}

{
  /* CODE FOR ROWS IN TABLE
<h2>All posts</h2>
    <ul>
      ${posts.map(postItem).join("")}
    </ul>  */
}

function sanitize(unsafe) {
  return unsafe.replace(/</g, "&lt;");
}

function validation(message) {
  if (message) {
    return `<span style="color: red">${message}</span>`;
  } else {
    return "";
  }
}

function postItem(post) {
  const date = new Date(post.created);
  const prettyDate = date.toLocaleString("en-GB");
  return `
    <li>
      <p>${sanitize(post.message)}</p>
      <p>—${sanitize(post.venueName)} | ${prettyDate}</p>
    </li>
  `;
}

function layout(title, content) {
  return /*html*/ `
    <!doctype html>
    <html>
      <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
      </head>
      <body>
        ${content}
      </body>
    </html>
  `;
}

module.exports = { home };
