# usable-zxcvbn
Example implementation of zxcvbn for a password field. Displays colored meter with strength 1-4 and suggestions to improve password.


When trying to use [zxcvbn](https://github.com/dropbox/zxcvbn) to provide password feedback as the password is entered into a form, I found it very difficult. Here is a simple bit of code that demonstrates the use of zxcvbn.


To install, git clone the repo and then run "bower install" to pull in zxcvbn. 

Bower can be installed via "npm install -g bower" and npm is installed with nodejs. Package manager inside package manager inside package manager. But that's how it's done, I guess. Alternatively, you can grab zxcvbn from the dropbox repo linked above and just amend the path at the bottom of index.html.


Heavy code used from https://css-tricks.com/password-strength-meter/, but there was a funny issue when passwords with too many things wrong with them were used (e.g. "House1").

Attempted to use code from https://dl.dropboxusercontent.com/u/209/zxcvbn/test/index.html, but opted not to as it was way complicated and did so much I didn't want. 


Do whatever you want with this, it'd be cool if you let me know if I helped you out though.
