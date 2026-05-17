import React from "react"
import {useSiteMetadata} from "../hooks/useSiteMetadata";
import {SEOProps} from "../types";


export const SEO: React.FC<SEOProps> = ({
                                            title,
                                            description,
                                            pathname,
                                            image,
                                            keywords,
                                            article,
                                            datePublished,
                                            children
                                        }) => {
    const {
        title: defaultTitle,
        description: defaultDescription,
        siteUrl,
        twitterUsername,
        keywords: defaultKeywords,
        image: defaultImage,
    } = useSiteMetadata()

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}/${pathname || ``}`,
        twitterUsername,
        keywords: keywords || defaultKeywords
    }

    const authorName = "Keshav Lingala"
    const jobTitle = "Software Development Engineer"
    const personId = `${siteUrl}/#person`
    const websiteId = `${siteUrl}/#website`
    const twitterHandle = (twitterUsername || "").replace(/^@/, "")

    const person = {
        "@type": "Person",
        "@id": personId,
        name: authorName,
        jobTitle,
        url: siteUrl,
        image: `${siteUrl}${defaultImage}`,
        sameAs: [
            "https://github.com/keshavlingala",
            ...(twitterHandle ? [`https://twitter.com/${twitterHandle}`] : []),
        ],
    }

    const website = {
        "@type": "WebSite",
        "@id": websiteId,
        url: `${siteUrl}/`,
        name: defaultTitle,
        description: defaultDescription,
        publisher: {"@id": personId},
        inLanguage: "en",
    }

    const graph: object[] = [person, website]

    if (article) {
        graph.push({
            "@type": "Article",
            headline: seo.title,
            description: seo.description,
            image: seo.image,
            url: seo.url,
            mainEntityOfPage: seo.url,
            datePublished: datePublished,
            dateModified: datePublished,
            inLanguage: "en",
            keywords: seo.keywords,
            author: {"@id": personId},
            publisher: {"@id": personId},
            isPartOf: {"@id": websiteId},
        })
    }

    const jsonLd = {"@context": "https://schema.org", "@graph": graph}

    return (
        <>
            <title>{seo.title}</title>
            <meta name="title" content={seo.title}/>
            <meta name="description" content={seo.description}/>
            <meta name="keywords" content={seo.keywords}/>
            <meta name="image" content={seo.image}/>
            <meta name="revisit-after" content="15 days"/>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
            <meta name="robots" content="index, follow"/>
            <meta name="language" content="English"/>
            <meta name="author" content={authorName}/>
            <link rel="canonical" href={seo.url}/>

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={seo.title}/>
            <meta name="twitter:url" content={seo.url}/>
            <meta name="twitter:description" content={seo.description}/>
            <meta name="twitter:image" content={seo.image}/>
            <meta name="twitter:image:alt" content={seo.title}/>
            <meta name="twitter:creator" content={seo.twitterUsername}/>

            {/*OG Meta Data*/}
            <meta property="og:title" content={seo.title}/>
            <meta property="og:description" content={seo.description}/>
            <meta property="og:image" content={seo.image}/>
            <meta property="og:image:alt" content={seo.title}/>
            <meta property="og:url" content={seo.url}/>
            <meta property="og:site_name" content={defaultTitle}/>
            <meta property="og:type" content={article ? "article" : "website"}/>
            <meta property="og:locale" content="en_US"/>
            {article && datePublished && (
                <meta property="article:published_time" content={datePublished}/>
            )}
            {article && datePublished && (
                <meta property="article:modified_time" content={datePublished}/>
            )}
            {article && <meta property="article:author" content={authorName}/>}

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
            />

            {children}
        </>
    )
}
