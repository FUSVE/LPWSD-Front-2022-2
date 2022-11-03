import React, { useEffect, useState, useRef } from 'react';
import { Table, Button } from 'reactstrap';

export default function Tabela() {

    const baseURL = "http://localhost:8080/pessoa";

    const delete_id = useRef(null);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        load();
    }, []);

    async function load() {
        await fetch(`${baseURL}`, {
            method: 'GET',
        })
            .then(data => {
                return data.json();
            })
            .then(data => {
                setUsers(data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    async function deleteAll() {
        await fetch(`${baseURL}`, {
            method: "delete"
        })
            .then(res => res.json())
            .then(res => console.log(res));
    }

    async function deleteById() {
        const id = delete_id.current.value;

        if (id) {
            await fetch(`${baseURL}/${id}`, { method: "delete" })
                .then(res => res.json())
                .then(res => console.log(res))
        }
    }

    return (
        <Table className="table-bordered text-center">
            <thead className="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>Foto</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Matrícula</th>
                    <th>Nascimento</th>
                    <th>Genero</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr>
                        <td ref={delete_id}>{user.idpessoa}</td>
                        <td><img src={user.foto} alt="foto" /></td>
                        <td>{user.nome}</td>
                        <td>{user.cpf}</td>
                        <td>{user.matricula}</td>
                        <td>{user.nascimento}</td>
                        <td>{user.genero}</td>
                        <td>
                            <Button color="info" size="sm" >Editar</Button>
                            <Button color="danger" size="sm" onClick={deleteById}>Deletar</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
            <Button color="danger" size="sm" onClick={deleteAll}>Delete All</Button>
        </Table>
    );
}