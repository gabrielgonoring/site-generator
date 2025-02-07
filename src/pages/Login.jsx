import './Login.css'
import Logo from '../component/Logo';
import Footer from '../component/Footer';

function Login() {
    return (
        <div className='container-fluid bg-white pt-5' style={{height: '100vh'}}>
            <div className="login-container border">

                <div  className="text-center pb-3">
                    <Logo/>
                </div>

                <form>
                <div className="form-group">
                    <input type="text" className="form-control" id="username" placeholder="Telefone, nome de usuário ou email" />
                </div>
                <div className="form-group pt-2">
                    <input type="password" className="form-control" id="password" placeholder="Senha" />
                </div>
                <button type="submit" className="btn btn-success">Entrar</button>

                <div className="login-footer">
                    <a className='text-success' href="#">Esqueceu a senha?</a>
                </div>
                </form>
            </div>
        </div>
    );
}

export default Login;