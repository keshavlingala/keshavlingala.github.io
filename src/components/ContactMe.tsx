import React, {ChangeEvent, useState} from "react";
import styled from "@emotion/styled";
import {ANON_MAILING_URL, MAILING_URL} from "../constants";

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

export const Button = styled.button`
    box-shadow: none;
    background-color: inherit;
    color: inherit;
    border-radius: 4px;
    padding: 5px;
    border: 1px solid;
    text-align: center;
    cursor: pointer;

    &:focus, &:hover {
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

const Span = styled.span<{ show: number }>`
    display: ${p => p.show !== 0 ? "inline-block" : "none"};
    margin-left: 30px;
`;

type FormType = {
    name: string;
    email: string;
    content: string;
    anonContent: string;
};

const ContactMe: React.FC = () => {
    const [form, setForm] = useState<FormType>({name: "", email: "", content: "", anonContent: ""});
    const [valid, setValid] = useState(false);
    const [show, setShow] = useState(0);
    const [anonShow, setAnonShow] = useState(0);

    const handleForm = (change: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, k: keyof FormType) => {
        const updatedForm = {...form, [k]: change.target.value};
        setForm(updatedForm);

        if (updatedForm.name.length > 2 &&
            updatedForm.email.match("^((?!\\.)[\\w-_.]*[^.])(@\\w+)(\\.\\w+(\\.\\w+)?[^.\\W])$") &&
            updatedForm.content.length > 0) {
            setValid(true);
        } else {
            setValid(false);
        }
    };

    const submitForm = async (isAnon: boolean) => {
        const url = isAnon ? ANON_MAILING_URL : MAILING_URL;
        const data = isAnon ? {anon_content: form.anonContent} : {...form, userData: await fetchUserData()};
        const resetForm: FormType = {name: "", email: "", content: "", anonContent: ""};


        fetch(url, {
            body: JSON.stringify(data),
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then((d) => {
            if (d.ok) {
                isAnon ? setAnonShow(1) : setShow(1);
                setTimeout(() => isAnon ? setAnonShow(0) : setShow(0), 10000);
            } else {
                isAnon ? setAnonShow(-1) : setShow(-1);
            }
        }).catch((_) => {
            isAnon ? setAnonShow(-1) : setShow(-1);
        });

        setForm(resetForm);
        setValid(false);
    };

    const fetchUserData = async () => {
        try {
            return await (await fetch("https://api.db-ip.com/v2/free/self")).json();
        } catch (e) {
            return null;
        }
    };

    return (
        <>
            <Row>
                <Input id="name" value={form.name} onChange={(c) => handleForm(c, "name")} name="name" placeholder="Name" type="text"/>
                <label htmlFor="name">Name</label>
                <Input id="email" value={form.email} onChange={(c) => handleForm(c, "email")} name="email" placeholder="Email" type="text"/>
                <label htmlFor="email">Email</label>
            </Row>
            <Row>
                <TextArea id="content" value={form.content} onChange={(c) => handleForm(c, "content")} placeholder="Type Your Message Here"
                          name="content"/>
                <label htmlFor="content">Message</label>
            </Row>
            <Row>
                <Button disabled={!valid} onClick={() => submitForm(false)}>Submit</Button>
                <Span show={show}>{show === -1 ? "Something Went Wrong Please try to contact with email" : "Submitted Successfully"}</Span>
            </Row>

            <h2 style={{marginTop: '50px'}} title="Send Anonymous Message">Send Anonymous Message</h2>
            <Row>
                <TextArea id="anonContent" value={form.anonContent} onChange={(c) => handleForm(c, "anonContent")}
                          placeholder="Anonymous Message Here" name="anonContent" rows={5}/>
                <label htmlFor="anonContent">Message</label>
            </Row>
            <Row>
                <Button disabled={!form.anonContent.length} onClick={() => submitForm(true)}>Send Anonymous Message</Button>
                <Span show={anonShow}>{anonShow === -1 ? "Something Went Wrong!" : "Submitted Successfully"}</Span>
            </Row>
        </>
    );
};

export default ContactMe;
