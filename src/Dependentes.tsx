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
                <div>Nome Dependente: {nome}</div>
                <div>Data de Nascimento: {data}</div>
                <div>Abono Salarial: R${abono}</div>
                
            </div>
        </>
    );
}

export default Dependentes