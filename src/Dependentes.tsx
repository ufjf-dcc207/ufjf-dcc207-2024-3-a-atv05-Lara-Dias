import dados from '../funcionarios.json';

interface DependenteProps{
    nome:string;
    data: string;
    abono:number;
}

function Dependentes({
    nome = dados.funcionarios[0].dependentes[0].nome,
    data = dados.funcionarios[0].dependentes[0].data_nascimento,
    abono = dados.funcionarios[0].dependentes[0].abono_salarial

}: DependenteProps){
    return(
        <>
        <div className="dependente"> 
                <p>Nome Dependente: {nome}</p>
                <p>Data de Nascimento: {new Date(data).toLocaleDateString()}</p>
                <p>Abono Salarial: R${abono.toFixed(2)}</p>
                
            </div>
        </>
    );
}

export default Dependentes