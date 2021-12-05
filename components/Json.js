import style from './Json.module.css'
const chaveR = '{'
const chaveL = '}'
function Json() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4">
                    
                </div>
                <div className={`col-sm-4 mt-4 p-4 rounded text-light ${style.bgvscode}`}>
                    <pre>{chaveR}</pre>
                    <div className="m-3">
                        <span className={style.atributo}>"nome"<span className={style.pontos}>: </span><span className={style.valueString}>"Sergio Gabriel"</span><span className={style.pontos}>,</span></span><br></br>
                        <span className={style.atributo}>"idade"<span className={style.pontos}>: </span><span className={style.valueInt}>20</span><span className={style.pontos}>,</span></span><br></br>
                        <span className={style.atributo}>"habilidades"</span>
                            <span>:[</span>
                                <div className="">
                                    <span className={style.valueString}>"HTML"</span>,<br></br>
                                    <span className={style.valueString}>"CSS"</span>,<br></br>
                                    <span className={style.valueString}>"JavaScript"</span>,<br></br>
                                    <span className={style.valueString}>"Python"</span>,<br></br>
                                </div>
                            <span>]</span>
                    </div>

                    <pre>{chaveL}</pre>
                </div>
            </div>
        </div>
    )
}

export default Json;