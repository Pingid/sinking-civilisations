import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

class TemplateWrapper extends Component {
  componentDidMount() {
    if (typeof window !== `undefined`) {
      const WebFont = require("webfontloader");
      WebFont.load({
        google: {
          families: [`Roboto`, `Roboto+Mono`]
        }
      });
    }
  }
  render() {
    const { children } = this.props;
    const schemaOrgJSONLD = {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: "https://sinkingcivilisations.com",
      name: "Sinking Civilisations - A Documentary Film",
      sameAs: [
        "https://www.indiegogo.com/projects/sinking-civilisations-a-documentary-film/x/18585037#/",
      ]
    };
    const title = "Sinking Civilisations - A Documentary Film";
    const description = "The plight of the Pacific Islanders, as a narrative for climate change.";
    return (
      <div>
        <noscript>Your browser does not support JavaScript!</noscript>
        <Helmet
          htmlAttributes={{
            lang: "en"
          }}
          title={title}
          meta={[
            { name: "description", content: description },
            {
              name: "keywords",
              content:
                "documentary, film, global warming, pacific islands, indiegogo"
            }
          ]}
        >
          <meta name="Description" content={description} />
          <meta name="description" content={description} />
          <meta property="og:url" content="https://canellariccardo.it" />
          <meta property="og:title" content={title} />
          <meta property="og:site_name" content={title} />
          <meta property="og:description" content={description} />
          {/* <meta property="og:image" content={image} /> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@ricanella92" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          {/* <meta name="twitter:image" content={image} /> */}
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgJSONLD)}
          </script>
        </Helmet>
        {children()}
      </div>
    );
  }
}
TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
