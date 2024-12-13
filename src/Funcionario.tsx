import dados from '../funcionarios.json';
import Dependentes from './Dependentes';


interface FuncionarioProps{
    nome:string;
    setor:string;
    salario:string;
    data: string;
}


function Funcionario( {
        nome = dados.funcionarios[0].nome_completo,
        setor = dados.funcionarios[0].setor,
        data = dados.funcionarios[0].data_admissao,
        
    }: FuncionarioProps){
    return(
        <>
            <div className="funcionario"> 
                <div>{nome}</div>
                <div>{setor}</div>
                <div>{data}</div>
            </div>

            <Dependentes/>
        </>
    );
    
}
    


export default Funcionario