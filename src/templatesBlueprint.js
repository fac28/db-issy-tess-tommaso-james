function home(posts, errors = {}, values = {}) {
  const title = "All posts";
  const content = /*html*/ `
      <h2>All posts</h2>
      <ul>
        ${posts.map(postItem).join("")}
      </ul>
    `;
  return layout(title, content);
}

function postItem(post) {
  return `
      <li>
        <p>${sanitize(post.message)}</p>
        <p>—${sanitize(post.nickname)} | ${prettyDate}</p>
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
