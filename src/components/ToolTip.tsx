import React from "react";
import styled from "@emotion/styled";
import {TippedLIProps, ToolTipItemProps, ULProps} from "../types";

export const UL = styled.ul<ULProps>`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-left: 0;
    animation: fadeUp 0.5s ease-in-out;

    @keyframes fadeUp {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;


const TippedLI = styled.li<TippedLIProps>`
    list-style: none;
    padding: 5px;
    border-radius: 10%;

    &:focus {
        outline: none;

        &::before {
            opacity: 1;
        }
    }

    cursor: pointer;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #d0cfcf45;

        &::before {
            opacity: 1;
            z-index: 1;
        }
    }

    &:active {
        box-shadow: 0 0 1px 0 black;

        &::before {
            opacity: 1;
            z-index: 1;
        }
    }

    position: relative;

    &::before {
        content: ${p => "'" + p.tooltip + "'"};
        font-size: 0.85em;
        position: absolute;
        display: flex;
        user-select: none;
        padding: 0.5rem;
        border-radius: 6px;
        color: #ffd285;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: -1;
        bottom: 110%;
        left: 0;
        width: 100%;
        align-items: center;
        height: 33px;
        white-space: nowrap;
        justify-content: center;
    }

    img {
        width: 40px;
        height: 40px;
        object-fit: scale-down;
    }
`;


export const ToolTipItem: React.FC<ToolTipItemProps> = ({children, tooltip, link}) => {
    // const [show, setShow] = useState(false);
    return (<TippedLI
            // onMouseEnter={() => setShow(true)}
            tooltip={tooltip}
            // show={show}
            // onTouchStart={() => setShow(true)}
            onClick={($event) => {
                link && window.open(link, "_blank");
                $event.preventDefault();
                $event.stopPropagation();
            }}
            // onTouchEnd={() => setShow(false)}
            // onMouseLeave={() => setShow(false)}
        >
            {children}
        </TippedLI>);
};
