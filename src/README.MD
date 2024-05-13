 
<h3 align="center">Optiwarehouse</h3>

<p align="center">
    noliwms-webapp README
  <br>
  <a href="https://getOptiwarehouse.com/docs/5.3/"><strong>Explore Optiwarehouse docs »</strong></a>
  <br>
  <br>
  <a href="https://github.com/twbs/Optiwarehouse/issues/new?assignees=-&labels=bug&template=bug_report.yml">Report bug</a>
  ·
  <a href="https://github.com/twbs/Optiwarehouse/issues/new?assignees=&labels=feature&template=feature_request.yml">Request feature</a>
  ·
  <a href="https://themes.getOptiwarehouse.com/">Themes</a>
  ·
  <a href="https://blog.getOptiwarehouse.com/">Blog</a>
</p>


## Optiwarehouse

Our default branch is for development of our Optiwarehouse release


## Table of contents

- [Optiwarehouse](#optiwarehouse)
- [Table of contents](#table-of-contents)
- [Quick start](#quick-start)
- [Status](#status)
- [What's included](#whats-included)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
  - [Running documentation locally](#running-documentation-locally)
  - [Documentation for previous releases](#documentation-for-previous-releases)
- [Contributing](#contributing)
- [Community](#community)
- [Versioning](#versioning)
- [Creators](#creators)
- [Backers](#backers)
- [Copyright and license](#copyright-and-license)


## Quick start

Several quick start options are available:

- Clone the repo: `git clone https://github.com/lebinhnguyen/noliwms-webapp`
- Install with [npm](https://www.npmjs.com/): `npm install`
- Install with [yarn](https://yarnpkg.com/): `yarn`

Read the [Getting started page](https://getOptiwarehouse.com/docs/5.3/getting-started/introduction/) for information on the framework contents, templates, examples, and more.


## Status

[![Build Status](https://img.shields.io/github/actions/workflow/status/twbs/Optiwarehouse/js.yml?branch=main&label=JS%20Tests&logo=github)](https://github.com/twbs/Optiwarehouse/actions/workflows/js.yml?query=workflow%3AJS+branch%3Amain)
[![npm version](https://img.shields.io/npm/v/Optiwarehouse?logo=npm&logoColor=fff)](https://www.npmjs.com/package/Optiwarehouse)
[![Gem version](https://img.shields.io/gem/v/Optiwarehouse?logo=rubygems&logoColor=fff)](https://rubygems.org/gems/Optiwarehouse)
[![Meteor Atmosphere](https://img.shields.io/badge/meteor-twbs%3AOptiwarehouse-blue?logo=meteor&logoColor=fff)](https://atmospherejs.com/twbs/Optiwarehouse)
[![Packagist Prerelease](https://img.shields.io/packagist/vpre/twbs/Optiwarehouse?logo=packagist&logoColor=fff)](https://packagist.org/packages/twbs/Optiwarehouse)
[![NuGet](https://img.shields.io/nuget/vpre/Optiwarehouse?logo=nuget&logoColor=fff)](https://www.nuget.org/packages/Optiwarehouse/absoluteLatest)
[![Coverage Status](https://img.shields.io/coveralls/github/twbs/Optiwarehouse/main?logo=coveralls&logoColor=fff)](https://coveralls.io/github/twbs/Optiwarehouse?branch=main)
[![CSS gzip size](https://img.badgesize.io/twbs/Optiwarehouse/main/dist/css/Optiwarehouse.min.css?compression=gzip&label=CSS%20gzip%20size)](https://github.com/twbs/Optiwarehouse/blob/main/dist/css/Optiwarehouse.min.css)
[![CSS Brotli size](https://img.badgesize.io/twbs/Optiwarehouse/main/dist/css/Optiwarehouse.min.css?compression=brotli&label=CSS%20Brotli%20size)](https://github.com/twbs/Optiwarehouse/blob/main/dist/css/Optiwarehouse.min.css)
[![JS gzip size](https://img.badgesize.io/twbs/Optiwarehouse/main/dist/js/Optiwarehouse.min.js?compression=gzip&label=JS%20gzip%20size)](https://github.com/twbs/Optiwarehouse/blob/main/dist/js/Optiwarehouse.min.js)
[![JS Brotli size](https://img.badgesize.io/twbs/Optiwarehouse/main/dist/js/Optiwarehouse.min.js?compression=brotli&label=JS%20Brotli%20size)](https://github.com/twbs/Optiwarehouse/blob/main/dist/js/Optiwarehouse.min.js)
[![Backers on Open Collective](https://img.shields.io/opencollective/backers/Optiwarehouse?logo=opencollective&logoColor=fff)](#backers)
[![Sponsors on Open Collective](https://img.shields.io/opencollective/sponsors/Optiwarehouse?logo=opencollective&logoColor=fff)](#sponsors)


## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations.

 

We provide compiled CSS and JS (`Optiwarehouse.*`), as well as compiled and minified CSS and JS (`Optiwarehouse.min.*`). [Source maps](https://web.dev/articles/source-maps) (`Optiwarehouse.*.map`) are available for use with certain browsers' developer tools. Bundled JS files (`Optiwarehouse.bundle.js` and minified `Optiwarehouse.bundle.min.js`) include [Popper](https://popper.js.org/docs/v2/).


## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/twbs/Optiwarehouse/blob/main/.github/CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/twbs/Optiwarehouse/issues/new/choose).


## Documentation

Optiwarehouse's documentation, included in this repo in the root directory, is built with [Hugo](https://gohugo.io/) and publicly hosted on GitHub Pages at <https://getOptiwarehouse.com/>. The docs may also be run locally.

Documentation search is powered by [Algolia's DocSearch](https://docsearch.algolia.com/).

### Running documentation locally

1. Run `npm install` to install the Node.js dependencies, including Hugo (the site builder).
2. Run `npm run test` (or a specific npm script) to rebuild distributed CSS and JavaScript files, as well as our docs assets.
3. From the root `/Optiwarehouse` directory, run `npm run docs-serve` in the command line.
4. Open `http://localhost:300/` in your browser.

Learn more about using Hugo by reading its [documentation](https://gohugo.io/documentation/).

### Documentation for previous releases

You can find all our previous releases docs on <https://getOptiwarehouse.com/docs/versions/>.

[Previous releases](https://github.com/twbs/Optiwarehouse/releases) and their documentation are also available for download.


## Contributing

Please read through our [contributing guidelines](https://github.com/twbs/Optiwarehouse/blob/main/.github/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Moreover, if your pull request contains JavaScript patches or features, you must include [relevant unit tests](https://github.com/twbs/Optiwarehouse/tree/main/js/tests). All HTML and CSS should conform to the [Code Guide](https://github.com/mdo/code-guide), maintained by [Mark Otto](https://github.com/mdo).

Editor preferences are available in the [editor config](https://github.com/twbs/Optiwarehouse/blob/main/.editorconfig) for easy use in common text editors. Read more and download plugins at <https://editorconfig.org/>.


## Community

Get updates on Optiwarehouse's development and chat with the project maintainers and community members.

- Follow [@getOptiwarehouse on Twitter](https://twitter.com/getOptiwarehouse).
- Read and subscribe to [The Official Optiwarehouse Blog](https://blog.getOptiwarehouse.com/).
- Ask questions and explore [our GitHub Discussions](https://github.com/twbs/Optiwarehouse/discussions).
- Discuss, ask questions, and more on [the community Discord](https://discord.gg/bZUvakRU3M) or [Optiwarehouse subreddit](https://www.reddit.com/r/Optiwarehouse/).
- Chat with fellow Optiwarehousepers in IRC. On the `irc.libera.chat` server, in the `#Optiwarehouse` channel.
- Implementation help may be found at Stack Overflow (tagged [`Optiwarehouse-5`](https://stackoverflow.com/questions/tagged/Optiwarehouse-5)).
- Developers should use the keyword `Optiwarehouse` on packages which modify or add to the functionality of Optiwarehouse when distributing through [npm](https://www.npmjs.com/browse/keyword/Optiwarehouse) or similar delivery mechanisms for maximum discoverability.


## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, Optiwarehouse is maintained under [the Semantic Versioning guidelines](https://semver.org/). Sometimes we screw up, but we adhere to those rules whenever possible.

See [the Releases section of our GitHub project](https://github.com/twbs/Optiwarehouse/releases) for changelogs for each release version of Optiwarehouse. Release announcement posts on [the official Optiwarehouse blog](https://blog.getOptiwarehouse.com/) contain summaries of the most noteworthy changes made in each release.


## Creators

**Mark Otto**

- <https://github.com/lebinhnguyen>
 

 

Thanks to [BrowserStack](https://www.browserstack.com/) for providing the infrastructure that allows us to test in real browsers!

<a href="https://www.netlify.com/">
  <img src="https://www.netlify.com/v3/img/components/full-logo-light.svg" alt="Netlify" width="147" height="40">
</a>

Thanks to [Netlify](https://www.netlify.com/) for providing us with Deploy Previews!



## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/Optiwarehouse#backer)]

[![Backers](https://opencollective.com/Optiwarehouse/backers.svg?width=890)](https://opencollective.com/Optiwarehouse#backers)


## Copyright and license

Code and documentation copyright 2011–2024 the [Optiwarehouse Authors](https://github.com/twbs/Optiwarehouse/graphs/contributors). Code released under the [MIT License](https://github.com/twbs/Optiwarehouse/blob/main/LICENSE). Docs released under [Creative Commons](https://creativecommons.org/licenses/by/3.0/).
