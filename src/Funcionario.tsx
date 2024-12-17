import Dependentes, {DependenteProps} from './Dependentes';
import './Funcionario.css'

interface FuncionarioProps{
    nome:string;
    setor:string;
    salario:number;
    data: string;
    dependentes: DependenteProps[];
}


function Funcionario( {
        nome,
        setor,
        salario,
        data,
        dependentes,
    }: FuncionarioProps){
        const totalAbono = dependentes.reduce((sum,dep) => sum +dep.abono_salarial,0);
        const salarioFinal = salario + totalAbono;

    return(
        <>
            <div className="funcionario"> 
                <h2>{nome}</h2>
                <p>Setor: {setor}</p>
                <p>Data de Admissão: {new Date(data).toLocaleDateString()}</p>
                <p>Salário Base: R$ {salario.toFixed(2)}</p>
                <p>Salário Final (com abonos): R$ {salarioFinal.toFixed(2)}</p>
            <h3>Dependentes</h3>
            {dependentes.length >0? (
                dependentes.map((dep, index) =>(
                    <Dependentes
                        key={index}
                        nome={dep.nome}
                        data_nascimento={dep.data_nascimento}
                        abono_salarial={dep.abono_salarial}
                    />
                ))
            ):(
                <p>Não possui dependentes</p>
            )}
         </div>
        </>
    );  
}
    


export default Funcionario