import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">synText!</span></h1>
            </header>
            <main className="public__main">
                <p>digitize your notes to optimise your productivity</p>
                <br />
                <p>Owner: @Sprouting Stump</p>
            </main>
            <footer>
                <Link to="/login">Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public