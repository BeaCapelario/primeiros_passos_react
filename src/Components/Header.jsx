//export function: Eu estou fazendo uma função que pode ser chamada em outro lugar
//Cabeçalho: Nome do meu componente e do mesmo arquivo
//() Recebe os parametros 
//{} É o script da minha função
//TODO RETURN EXECUTA SOMENTE UMA TAG MAIOR
import estilo from './Header.module.css';

export function Header(){
    return(
         <header className={estilo.header}>
                <h1 className={estilo.titulo}>Cabeçalho</h1>
         </header>
    )
}