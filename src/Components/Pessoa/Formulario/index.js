import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label, FormText } from 'reactstrap';

export default function Formulario() {

    const baseURL = "http://localhost:8080/pessoa";

    const [post_nome, setPost_nome] = useState("");
    const [post_cpf, setPost_cpf] = useState("");
    const [post_matricula, setPost_matricula] = useState("");

    const { token } = useState("");

    async function postData() {
        const postData = {
            nome: post_nome,
            matricula: post_matricula,
            cpf: post_cpf,
        };

        console.log(postData);

        try {
            await fetch(`${baseURL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    jwtToken: token,
                },
                body: JSON.stringify(postData),
            });

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Form>
            <FormGroup>
                <Label for="nome">Nome:</Label>
                <Input id="nome" value={post_nome} onChange={(e) => setPost_nome(e.target.value)} type='text' placeholder='Informe o nome do usuário' />
            </FormGroup>
            <FormGroup>
                <div className="form-row">
                    <div className="col-md-6">
                        <Label for="cpf">CPF:</Label>
                        <Input id="cpf" type="text" value={post_cpf} onChange={(e) => setPost_cpf(e.target.value)} pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                            title="Digite um CPF no formato: xxx.xxx.xxx-xx" />
                    </div>
                    <div className="col-md-6">
                        <Label for="matricula">Matrícula:</Label>
                        <Input id="matricula" type="number" value={post_matricula} onChange={(e) => setPost_matricula(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <Label for="nascimento">Nascimento:</Label>
                        <Input id="nascimento" type="date" />
                    </div>
                    <div className="col-md-6">
                        <FormGroup>
                            <Label for="genero">Genero:</Label>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="genero" value={'Masculino'} /> Masculino
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="genero" value={'Feminino'} /> Feminino
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="genero" value={'Outro'} /> Outro
                                </Label>
                            </FormGroup>
                        </FormGroup>
                    </div>
                    <div className="col-md-6">
                        <Label for="foto">Foto:</Label>
                        <Input id="foto" type="file" />
                        <FormText color="muted">
                            Foto para reconhecimento.
                        </FormText>
                    </div>
                </div>
            </FormGroup>
            <Button onClick={postData}>Gravar</Button>
        </Form>
    );
}