import dados from '../funcionarios.json';
import Dependentes from './Dependentes';


interface FuncionarioProps{
    nome:string;
    setor:string;
    salario:number;
    data: string;
}


function Funcionario( {
        nome = dados.funcionarios[0].nome_completo,
        setor = dados.funcionarios[0].setor,
        salario = dados.funcionarios[0].salario_base,
        data = dados.funcionarios[0].data_admissao,
    }: FuncionarioProps){
        const dependentes = dados.funcionarios[0].dependentes;
        const totalAbono = dependentes.reduce((sum,dep) => sum +dep.abono_salarial,0);
        const salarioFinal = salario + totalAbono;

    return(
        <>
            <div className="funcionario"> 
                <h2>{nome}</h2>
                <p>{setor}</p>
                <p>{new Date(data).toLocaleDateString()}</p>
                <p>Salário Base: R$ {salario.toFixed(2)}</p>
                <p>Salário Final (com abonos): R$ {salarioFinal.toFixed(2)}</p>
            </div>
            <h3>Dependentes</h3>
            {dependentes.map((dep, index) =>(
                <Dependentes
                key={index}
                nome={dep.nome}
                data={dep.data_nascimento}
                abono={dep.abono_salarial}
                />
            ))}
        </>
    );
    
}
    


export default Funcionario