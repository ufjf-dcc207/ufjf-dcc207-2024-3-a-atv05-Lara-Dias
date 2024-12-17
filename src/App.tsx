import './App.css';
import dados from '../funcionarios.json';
import Funcionario from './Funcionario';


 
function App() {
  return (
    <>
      <h1>Quadro de Funcionários</h1>
      <div className='quadroFuncionarios'>
        {dados.funcionarios.map((funcionario, index)=> (
        <Funcionario
          key={index}
          nome={funcionario.nome_completo}
          setor={funcionario.setor}
          salario={funcionario.salario_base}
          data={funcionario.data_admissao}
          dependentes={funcionario.dependentes}
        />
      ))}
    </div>
    </>
  )
}

export default App
