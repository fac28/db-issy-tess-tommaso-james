const test = require("node:test");
const assert = require("node:assert");
const server = require("../src/server.js");
const { resetDatabase } = require("../src/database/reset.js");

test("home route returns expected page", async () => {
    await resetDatabase();
    const app = server.listen(9876);
    const response = await fetch("http://localhost:9876");
    app.close();
    assert.equal(response.status, 200);
    const body = await response.text();
    
    /*
    This regular expression matches the following pattern within the HTML:
    <p>: Start of the paragraph tag.
    \s*: Match any whitespace characters (including spaces, tabs, and line breaks), if any, between elements.
    ([^|]+): Match and capture one or more characters that are not a pipe |.
    \s*\|: Match any whitespace characters (if any) followed by a pipe |.
    Repeat the above pattern for each piece of restaurant information (name, street, borough, postcode, and cuisine).
    \s*</p>: Match any whitespace characters (if any) followed by the end of the paragraph tag </p>. 
     */
    const expectedPattern = /<p>\s*([^|]+)\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*<\/p>/gi;
    
    // Check if the body matches the expected pattern
    const matches = body.match(expectedPattern);

    // Assert that the matches are not null (i.e., the pattern was found in the body)
    assert.notEqual(matches, null);
  });