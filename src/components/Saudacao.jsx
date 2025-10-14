function Saudacao({nome}) {
    function gerarSaudacao(algumNome) {
        return `Olá ${algumNome}, Seja Bem Vindo !!!`
    }



    return (
        <div>
            {nome && 
                <p> {gerarSaudacao (nome)}</p>
            }
            
        </div>
    )
}

export default Saudacao