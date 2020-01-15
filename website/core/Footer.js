/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div>
            <h5>TECH SKILLO</h5>
            <a href={"/"}>
              Courses
            </a>
            <a href={"/"}>
              Bundles
            </a>
            <a href={"/"}>
              Android App
            </a>
            <a href={"/"}>
              iOS App
            </a>
            <a href={"/"}>
              Feature Request
            </a>
            <a href={"/"}>
              Interships
            </a>
          </div>

          <div>
            <h5>COMPANY</h5>
            <a href={"/"}>
              About Us
            </a>
            <a href={"/"}>
              Terms
            </a>
            <a href={"/"}>
              Privacy
            </a>
            <a href={"/"}>
              Pricing Policy
            </a>
            <a href={"/"}>
              SiteMap
            </a>
            <a href={"/"}>
              Contact Us
            </a>
          </div>          

          <div>
            <h5>COURSES</h5>
            <a href={"/"}>
              C Programming
            </a>
            <a href={"/"}>
              Linux Kernel
            </a>
            <a href={"/"}>
              Device Drivers
            </a>
            <a href={"/"}>
              Angular
            </a>
            <a href={"/"}>
              ionic Framework
            </a>
            <a href={"/"}>
              More Courses
            </a>
          </div>

          <div>
            <h5>More Links</h5>

            <a href={"/"}>
              Careers
            </a>

            <a href={"/"}>
              Partners
            </a>                        

            <a href="https://github.com/hoodaajay99">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>

            <a
              href="https://stackoverflow.com/questions/tagged/"
              target="_blank"
              rel="noreferrer noopener">
              Stack Overflow
            </a>

            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button">
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
            {this.props.config.facebookAppId && (
              <div className="social">
                <div
                  className="fb-like"
                  data-href={this.props.config.url}
                  data-colorscheme="dark"
                  data-layout="standard"
                  data-share="true"
                  data-width="225"
                  data-show-faces="false"
                />
              </div>
            )}
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
