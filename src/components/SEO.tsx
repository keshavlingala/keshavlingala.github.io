import React from "react"
import {useSiteMetadata} from "../hooks/useSiteMetadata";
import {SEOProps} from "../types";


export const SEO: React.FC<SEOProps> = ({
                                            title,
                                            description,
                                            pathname,
                                            image,
                                            keywords,
                                            children
                                        }) => {
    // useStaticQuery(graphql`
    //
    // `)
    let {
        title: defaultTitle,
        description: defaultDescription,
        siteUrl,
        twitterUsername,
        keywords: defaultKeywords,
        image: defaultImage,
    } = useSiteMetadata()
    // siteUrl = 'http://localhost:8000'

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}/${pathname || ``}`,
        twitterUsername,
        keywords: keywords || defaultKeywords
    }

    return (
        <>
            <title>{seo.title}</title>
            <meta name="title" content={seo.title}/>
            <meta name="description" content={seo.description}/>
            <meta name="keywords" content={defaultKeywords}/>
            <meta name="image" content={seo.image}/>
            <meta name="revisit-after" content="15 days"/>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
            <meta name="robots" content="index, follow"/>
            <meta name="language" content="English"/>
            <meta name="author" content="Keshav Lingala"/>

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={seo.title}/>
            <meta name="twitter:url" content={seo.url}/>
            <meta name="twitter:description" content={seo.description}/>
            <meta name="twitter:image" content={seo.image}/>
            <meta name="twitter:creator" content={seo.twitterUsername}/>

            {/*OG MEta Data*/}
            <meta property="og:title" content={seo.title}/>
            <meta property="og:description" content={seo.description}/>
            <meta property="og:image" content={seo.image}/>
            <meta property="og:url" content={seo.url}/>
            <meta property="og:site_name" content={seo.title}/>
            <meta property="og:type" content="website"/>
            <meta property="og:locale" content="en_US"/>

            {children}
        </>
    )
}

export const Head = () => {
    return (
        <>
            <html lang='en'/>
        </>
    )
}
