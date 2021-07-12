const execa = require('execa');
const arvish = require('arvish');

(async () => {
  await execa('code', [arvish.input], { windowsHide: true, detached: true });
}) ();