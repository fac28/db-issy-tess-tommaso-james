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
        <label for="message">Message</label>
        <textarea
          id="message"
          name="message">
            ${values.message ? sanitize(values.message) : ""}
          </textarea>
        ${validation(errors.message)}
        </p>
      <button>Send</button>
    </form>
    <h2>All posts</h2>
    <ul>
      ${posts.map(postItem).join("")}
    </ul>
  `;
  return layout(title, content);
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
