import React, { useState } from "react"
import styled from "@emotion/styled"

const Input = styled.input`
  padding: 10px;
  background: inherit;
  color: inherit;
  box-shadow: none;
  border: 1px solid;
  border-radius: 10px 10px 0 0 ;
  transition: background-color 0.5s ease-in-out;
  &:focus{
    outline: none;
    box-shadow: 1px 1px 1px black;
    background-color: #1b1b1b;
  }
  width: 100%;
  margin-right: 20vw;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
`
const TextArea = styled.textarea`
  color: inherit;
  resize: none;
  width: calc(100% - 20vw);
  background-color: inherit;
  box-shadow: none;
  border: 1px solid;
  border-radius: 10px 10px 0 0 ;
  padding: 10px;
  &:focus{
    outline: none;
    box-shadow: 1px 1px 1px black;
    background-color: #1b1b1b;
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
  cursor:pointer;
  &:focus,:hover{
    outline: none;
    background-color: #1b1b1b;
    box-shadow: inset 0 0 4px 5px black;
  }
  &:disabled{
    background-color: #1b1b1b;
    color: #545454;
    box-shadow: none;
    outline: none;
    cursor: not-allowed;
  }
`
const Span = styled.span`
  display: ${p => p.show !== 0 ? "inline-block" : "none"};
  margin-left: 30px;
`
const ContactMe = () => {
  const [form, setForm] = useState({ name: "", email: "", content: "" })
  const [valid, setValid] = useState(false)
  const [show, setShow] = useState(0)
  const handleForm = (change, k) => {
    let obj = form
    obj[k] = change.target.value
    setForm({ ...form, ...obj })
    if (form.name.length > 2 && form.email.match("^((?!\\.)[\\w-_.]*[^.])(@\\w+)(\\.\\w+(\\.\\w+)?[^.\\W])$") && form.content.length > 0) {
      setValid(true)
    } else {
      setValid(false)
    }
  }
  const submitForm = () => {
    console.log(form)
    setForm({ name: "", email: "", content: "" })
    setValid(false)
    fetch("https://mailingserver.herokuapp.com/", {
      body: JSON.stringify(form),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then((d) => {
      if (d.ok) {
        setShow(1)
        setTimeout(() => setShow(0), 3000)
      } else {
        setShow(-1)
      }
    })

  }
  return (
    <>
      <Row>
        <Input id='name' value={form.name} onChange={(c) => handleForm(c, "name")} name='name' placeholder='Name'
               type="text"/>
        <label htmlFor="name">Name</label>
        <Input id='email' value={form.email} onChange={(c) => handleForm(c, "email")} name='email' placeholder='Email'
               type="text"/>
        <label htmlFor="email">Email</label>

      </Row>
      <Row>
        <TextArea id='content' value={form.content} onChange={(c) => handleForm(c, "content")}
                  placeholder='Type Your Message Here'
                  name='content'
                  type="text"/>
        <label htmlFor="content">Message</label>
      </Row>
      <Row>
        <Button disabled={!valid} onClick={(d) => submitForm(d)}>Submit</Button>
        <Span
          show={show}>{show === -1 ? "Something Went Wrong Please try to contact with email" : "Submitted Successfully"}</Span>
      </Row>
    </>
  )
}
export default ContactMe
