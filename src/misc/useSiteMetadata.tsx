import {graphql, useStaticQuery} from "gatsby"
import {SiteMetadata, UseSiteMetadataQuery} from "../types";


export const useSiteMetadata = (): SiteMetadata => {
    const data = useStaticQuery<UseSiteMetadataQuery>(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
          keywords
          twitterUsername
          siteUrl
        }
      }
      profileImage: file(relativePath: { eq: "images/ProfileGray.jpg" }) {
        publicURL
      }
      logoImage: file(relativePath: { eq: "images/logo.png" }) {
        publicURL
      }
    }
  `)

    return {
        ...data.site.siteMetadata,
        profileImage: data.profileImage.publicURL,
        image: data.logoImage.publicURL
    }
}
