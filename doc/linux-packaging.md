# Building binary packages for Linux

## Pre-requisites

Make sure you can build the `node.js` client from source code (i.e. you can successfully complete the Quickstart section of the `README` file). 

#### Debian/Ubuntu (deb package format)

1. Make sure you have `dpkg`, `jq` and `fakeroot` installed (otherwise, install them with `apt`).
2. Run `PACKAGING=1 yarn`.
3. Run `PACKAGING=1 yarn build`.
4. Then run `yarn run build-deb`.
5. The deb package will be located in the `dist/` directory.

Note: creating deb packages only has been tested extensively on Ubuntu and Debian.

#### Fedora/CentOS/RHEL (RPM package format)

1. Make sure you have `rpm-build` installed (otherwise, install it with `yum` or `dnf`).
2. Run `PACKAGING=1 yarn`
3. Run `PACKAGING=1 yarn build`.
4. Then run `yarn run build-rpm`.
5. The RPM package will be located in the `dist/` directory.

Note: creating RPM packages only has been tested extensively on Fedora.
