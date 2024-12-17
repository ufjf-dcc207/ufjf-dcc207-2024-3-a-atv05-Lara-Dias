export interface DependenteProps{
    nome:string;
    data_nascimento: string;
    abono_salarial:number;
}

function Dependentes({nome, data_nascimento, abono_salarial}:DependenteProps){
    return(
        <>
        <div className="dependente"> 
                <p>Nome Dependente: {nome}</p>
                <p>Data de Nascimento: {new Date(data_nascimento).toLocaleDateString()}</p>
                <p>Abono Salarial: R${abono_salarial.toFixed(2)}</p>
                
            </div>
        </>
    );
}

export default Dependentes