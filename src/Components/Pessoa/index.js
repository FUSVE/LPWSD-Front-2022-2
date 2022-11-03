import React from 'react';

import Formulario from './Formulario';
import Tabela from './Tabela';

function PessoaBox() {

    return (
        <div>
            <div className="row">
                <div className="col-md-6 my-3">
                    <h2 className="font-weight-bold text-center"> Cadastro de Pessoas </h2>
                    <Formulario />
                </div>
                <div className="col-md-6 my-3">
                    <h2 className="font-weight-bold text-center"> Lista de Pessoas </h2>
                    <Tabela />
                </div>
            </div>
        </div>
    );
}
export default PessoaBox;