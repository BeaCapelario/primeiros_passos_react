import estilo from './NavBar.module.css';
export function NavBar(){
    return (
        <nav className={estilo.barranavegacao}>
            <ul>
                <li>Home</li>
                <li>Livros</li>
                <li>Curiosidades</li>
            </ul>
        </nav>
    )
}