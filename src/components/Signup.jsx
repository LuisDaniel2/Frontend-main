import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

export function Signup() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        if (email === "" || password === "") {
            setError(true)
            return
        }
        setError(false)
    };


    return (
        <>
            <Form onSubmit={handleSubmit}>

                <label>
                    <h1>Form Login</h1>
                </label>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>

                    <Form.Control

                        type="email"
                        name="Email"
                        value={email}
                        placeholder="Enter email"
                        onChange={e => setEmail(e.target.value)}
                    />

                    <Form.Text className="text-muted">
                        {" "}
                        Wil never share wour Email {" "}
                    </Form.Text>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>

                    <Form.Control

                        type="password"
                        name="Password"
                        value={password}
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me" />
                </Form.Group>

                <Button variant="primary" type="submit" >
                    {" "}
                    Inicio Sesion{" "}
                </Button>
            </Form>
        </>
    )
}
