const core = require('@actions/core');
const github = require('@actions/github');
const { default: axios } = require('axios');

try {
  // `who-to-greet` input defined in action metadata file
  const tok = core.getInput('gh-token');
  const info = core.getInput('gh-pr-info');
  const count = core.getInput('reviewer-count');
  // const nameToGreet = core.getInput('gh-token');
  console.log(JSON.stringify({ tok, info, count }))
  core.setOutput("result", "ok")
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  axios.get(' https://api.github.com/repos/paymongo/dashboard-web/pulls/1351', {
    headers: {
      Authorization: `Bearer ${tok}`
    }
  }).then((res) => console.log({ res }));
  console.log('curent pr',JSON.parse(payload));
  // console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}