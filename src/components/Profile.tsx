import React from "react";
import styled from "@emotion/styled";

const Background = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    @media only screen and (max-width: 600px) {
        flex-direction: column-reverse;
        text-align: center;
        margin-bottom: 10px;
    }
`;

const Title = styled.h1`
    display: block;
    margin-left: 2vw;
    font-size: 8vw;
    font-weight: lighter;
    animation: fadeInLeft 2s;
    @media only screen and (max-width: 600px) {
        margin-left: 0;
    }
`;

const SubTitle = styled.span`
    display: block;
    margin-left: 2vw;
    font-size: 3vw;
    font-weight: initial;
    animation: fadeInUp 2s;
`;

const Profile: React.FC = () => {
    return (
        <Background>
            <div>
                <Title>Keshav Lingala</Title>
                <SubTitle>Software Development Engineer</SubTitle>
            </div>
        </Background>
    );
};

export default Profile;
