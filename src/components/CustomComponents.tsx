import styled from "@emotion/styled";
import React from "react";
import {graphql, Link, useStaticQuery} from "gatsby";
import {GatsbyImage, getImage, IGatsbyImageData} from "gatsby-plugin-image";
import {NotFoundImageData} from "../types";

const Container = styled.div`
    margin-left: 5vw;
    margin-right: 5vw;

    div, p, img, h1, h2, h3, h4, h5, h6, blockquote {
        //animation: zoomIn 0.5s ease-out;
    }
`;



const NotFoundImage: React.FC = () => {
    const data: NotFoundImageData = useStaticQuery(graphql`
        {
            file(relativePath: { eq: "images/404.png" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, formats: [AUTO, WEBP])
                }
            }
        }
    `);
    const image = getImage(data.file.childImageSharp.gatsbyImageData);
    return <GatsbyImage style={{height: "50%", width: "80%"}} alt="404 Not Found" image={image!}/>;
};

const NotFound: React.FC = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h4>Page Not Found</h4>
            <Link to="/"><p>Go back to Home</p></Link>
            <NotFoundImage/>
        </div>
    );
};

export {
    Container,
    NotFound
};

