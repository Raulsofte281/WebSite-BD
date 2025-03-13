document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;
    if(aumentaFonteBotao){
        aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });
    if(diminuiFonteBotao){
        diminuiFonteBotao.addEventListener('click', function(){
            tamanhoAtualFonte -= 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

        });
    }
  }
});

export function Teste(){
    return(
        <>
        <body>            
            <div>
                <div id="assebilidade">
                    <button id="aumentar-fonte" className="btn btn-primary fw-bold">A+</button>
                    <button id="diminuir-fonte" className="btn btn-primary fw-bold">A-</button>
                </div>
                <p>oiiiiiiiiiiii</p>
            </div>
            </body>
        </>
    )
}
export default Teste;

