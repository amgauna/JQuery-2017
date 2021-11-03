const path = require('path');
const Server = require('node-git-server');
 
const repos = new Server(path.resolve(__dirname, 'tmp'), {
    autoCreate: true,
    authenticate: (type, repo, user, next) => {
      if(type == 'push') {
        user((username, password) => {
          console.log(username, password);
          next();
        });
      } else {
        next();
      }
    }
});
const port = process.env.PORT || 7005;
 
repos.on('push', (push) => {
    console.log(`push ${push.repo}/${push.commit} (${push.branch})`);
    push.accept();
});
 
repos.on('fetch', (fetch) => {
    console.log(`fetch ${fetch.commit}`);
    fetch.accept();
});
 
repos.listen(port, () => {
    console.log(`node-git-server running at http://localhost:${port}`)
});
