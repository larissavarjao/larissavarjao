import * as React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";


SEO.defaultProps = {
    lang: `pt`,
    meta: [],
    description: ``,
}

interface SEOProps {
    description?: string;
    lang?: string;
    meta?: { name: string; content: any; property?: undefined; } | { property: string; content: any; name?: undefined; } | ConcatArray<{ name: string; content: any; property?: undefined; } | { property: string; content: any; name?: undefined; }>;
    title: string;
}

function SEO({ description, lang, meta, title }: SEOProps) {
    const { site } = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
    )

    const metaDescription = description || site.siteMetadata.description

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ].concat(meta)}
        />
    )
}

export default SEO;