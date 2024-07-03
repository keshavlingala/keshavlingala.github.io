import React, {useState} from "react";
import styled from "@emotion/styled";
import {ANON_MAILING_URL, MAILING_URL} from "../constant";

const Input = styled.input`
    padding: 10px;
    background: inherit;
    color: inherit;
    box-shadow: none;
    border: 1px solid;
    border-radius: 10px 10px 0 0;
    transition: background-color 0.5s ease-in-out;

    &:focus {
        outline: none;
        box-shadow: 1px 1px 1px black;
        background-color: #1b1b1b;
    }

    width: 100%;
    margin-right: 20vw;
    @media only screen and (max-width: 600px) {
        //margin-right: 2vw;
        margin-right: 0;
        margin-top: 2vw;
        width: 100%;
    }
`;
const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
    @media only screen and (max-width: 600px) {
        flex-direction: column;

    }
`;
const TextArea = styled.textarea`
    color: inherit;
    resize: none;
    width: calc(100% - 20vw);
    background-color: inherit;
    box-shadow: none;
    border: 1px solid;
    border-radius: 10px 10px 0 0;
    padding: 10px;

    &:focus {
        outline: none;
        box-shadow: 1px 1px 1px black;
        background-color: #1b1b1b;
    }

    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`;

const AnonTextArea = styled(TextArea)`
    font-style: italic;
    box-shadow: inset 0 0 17px 0 #2271f3;

    :focus, :hover, :active {
        box-shadow: inset 0 0 17px 0 #2271f3;
    }
`
const Button = styled.button`
    box-shadow: none;
    background-color: inherit;
    color: inherit;
    border-radius: 4px;
    padding: 5px;
    border: 1px solid;
    text-align: center;
    cursor: pointer;

    &:focus, :hover {
        outline: none;
        background-color: #1b1b1b;
        box-shadow: inset 0 0 4px 5px black;
    }

    &:disabled {
        background-color: #1b1b1b;
        color: #545454;
        box-shadow: none;
        outline: none;
        cursor: not-allowed;
    }
`;

const AnonButton = styled(Button)`
    font-style: italic;
    color: #3B82F6;
`
const Span = styled.span`
    display: ${p => p.show !== 0 ? "inline-block" : "none"};
    margin-left: 30px;
`;

const ContactMe = () => {
    const [form, setForm] = useState({name: "", email: "", content: ""});
    const [anonForm, setAnonForm] = useState({anonContent: ""});
    const [valid, setValid] = useState(false);
    const [show, setShow] = useState(0);
    const [anonShow, setAnonShow] = useState(0);

    /**
     * Handles form input changes and updates form state accordingly.
     * @param {Event} change - The event object representing the form input change.
     * @param {string} k - The key of the form field being updated.
     */
    const handleForm = (change, k) => {
        let updatedForm = {...form};

        updatedForm[k] = change.target.value;

        setForm({...form, ...updatedForm});

        if (updatedForm.name.length > 2 &&
            updatedForm.email.match("^((?!\\.)[\\w-_.]*[^.])(@\\w+)(\\.\\w+(\\.\\w+)?[^.\\W])$") &&
            updatedForm.content.length > 0) {
            setValid(true);
        } else {
            setValid(false);
        }
    };

    const handleAnonForm = (change, k) => {
        const updatedAnonForm = {...anonForm};
        updatedAnonForm[k] = change.target.value;
        setAnonForm({...anonForm, ...updatedAnonForm});
        console.log(updatedAnonForm);
    }
    const submitForm = async () => {
        setForm({name: "", email: "", content: ""});
        setValid(false);
        let userData;
        try {
            userData = await (await fetch("https://api.db-ip.com/v2/free/self")).json();
        } catch (e) {
            userData = null;
        }
        const moreData = {...form, userData};
        fetch(MAILING_URL, {
            body: JSON.stringify(moreData),
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then((d) => {
            if (d.ok) {
                setShow(1);
                setTimeout(() => setShow(0), 10000);
            } else {
                setShow(-1);
            }
        }).catch((_) => {
            setShow(-1);
        });

    };

    const submitAnonForm = async () => {
        setAnonForm({anonContent: ""});
        let metaData;
        try {
            metaData = await (await fetch("https://api.db-ip.com/v2/free/self")).json();
        } catch (e) {
            metaData = null;
        }
        const enrichedForm = {
            anon_content: anonForm.anonContent,
            meta_data: metaData
        };
        fetch(ANON_MAILING_URL, {
            body: JSON.stringify(enrichedForm),
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then((d) => {
            if (d.ok) {
                setAnonShow(1);
                setTimeout(() => setAnonShow(0), 10000);
            } else {
                setAnonShow(-1);
            }
        }).catch((_) => {
            setAnonShow(-1);
        });

    };


    return (
        <>
            <Row>
                <Input id="name" value={form.name} onChange={(c) => handleForm(c, "name")} name="name"
                       placeholder="Name"
                       type="text"/>
                <label htmlFor="name">Name</label>
                <Input id="email" value={form.email} onChange={(c) => handleForm(c, "email")} name="email"
                       placeholder="Email"
                       type="text"/>
                <label htmlFor="email">Email</label>

            </Row>
            <Row>
                <TextArea id="content" value={form.content} onChange={(c) => handleForm(c, "content")}
                          placeholder="Type Your Message Here"
                          name="content"
                          type="text"/>
                <label htmlFor="content">Message</label>
            </Row>
            <Row>
                <Button disabled={!valid} onClick={(d) => submitForm(d)}>Submit</Button>
                <Span
                    show={show}>{show === -1 ? "Something Went Wrong Please try to contact with email" : "Submitted Successfully"}</Span>
            </Row>


            <h2 style={{marginTop: '50px'}} title="Send Anonymous Message">Send Anonymous Message</h2>
            <Row>
                <AnonTextArea id="anonContent" value={anonForm.anonContent}
                              onChange={(c) => handleAnonForm(c, "anonContent")}
                              placeholder="Anonymous Message Here"
                              name="anonContent"
                              rows={5}
                              type="text"/>
                <label htmlFor="anonContent">Message</label>
            </Row>
            <Row>
                <AnonButton disabled={!anonForm.anonContent.length > 0} onClick={(d) => submitAnonForm(d)}>
                    Send Anonymous Message</AnonButton>
                <Span
                    show={anonShow}>{anonShow === -1 ? "Something Went Wrong!" : "Submitted Successfully"}</Span>
            </Row>
        </>
    );
};
export default ContactMe;
