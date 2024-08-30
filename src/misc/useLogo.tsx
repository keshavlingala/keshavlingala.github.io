import React from "react";
import {graphql, useStaticQuery} from "gatsby";
import {GatsbyImage, getImage, IGatsbyImageData} from "gatsby-plugin-image";
import {LogoData} from "../types";



const Logo: React.FC = () => {
    const data: LogoData = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/brand.png" }) {
        childImageSharp {
          gatsbyImageData(width: 40, height: 40, layout: FIXED, placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
    }
  `);
    const image = getImage(data.file.childImageSharp?.gatsbyImageData || null);
    return <GatsbyImage alt="Keshav Lingala" image={image!}/>;
};

export default Logo;
