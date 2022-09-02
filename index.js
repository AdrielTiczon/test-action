const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const tok = core.getInput('gh-token');
  const info = core.getInput('gh-pr-info');
  // const nameToGreet = core.getInput('gh-token');
  console.log({ tok, info })
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}