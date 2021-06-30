import ilustration from "../assets/images/illustration.svg"
import logo from "../assets/images/logo.svg"
import googleIcon from "../assets/images/google-icon.svg"


export function Home(){
    return(
        <div> 
            <aside>
                <img src ={ilustration} alt="Ilustação simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp; A  ao Vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
                <main>
                    <div>
                    <img src ={logo} alt="Logo da aplicação Letmeask" />
                    <button>
                        <img src ={googleIcon} alt="Logo do google" />
                        Crie sua sala com o Google
                    </button>
                    <div>Entre em uma sala</div>
                    <form>
                        <input type="text"
                        placeholder="Digite o código da sala" 
                        />
                    <button type ="submit">
                    Entrar na sala
                    </button>
                       
                    </form>
                    </div>
                </main>
            </aside>
        </div>
    )
}