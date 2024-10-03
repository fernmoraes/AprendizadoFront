import Imagem1 from '../assets/Imagem1.jpg'
import Imagem2 from '../assets/Imagem2.jpg'
import Imagem3 from '../assets/Imagem3.jpg'
import Imagem4 from '../assets/Imagem4.jpg'

import '../css/loja.css'


const Home = () => {
    return (
        <>
            <header>
                <h1>Loja City</h1>
            </header>
            <main>
                <article className="produto-grid">

                    <section className="produto-item span-row-2" >
                        <img src={Imagem1} alt="Produto-1" id="image" />
                        <div>
                            <h3>Produto-1</h3>
                            <p>R$ 100,00</p>
                        </div>
                    </section>

                    <section className="produto-item ">
                        <img src={Imagem2} alt="Produto-2" id="image" />
                        <div>
                            <h3>Produto-2</h3>
                            <p>R$ 200,00</p>
                        </div>
                    </section>

                    <section className="produto-item">
                        <img src={Imagem3} alt="Produto-3" id="image" />
                        <div>
                            <h3>Produto-3</h3>
                            <p>R$ 300,00</p>
                        </div>
                    </section>

                    <section className="produto-item span-row-2">
                        <img src={Imagem4} alt="Produto-4" id="image" />
                        <div>
                            <h3>Produto-4</h3>
                            <p>R$ 390,00</p>
                        </div>
                    </section>

                    <section className="produto-item span-row-2 span-col-2">
                        <img src={Imagem3} alt="Produto-5" id="image" />
                        <div>
                            <h3>Produto-5</h3>
                            <p>R$ 400,00</p>
                        </div>
                    </section>


                    <section className="produto-item">
                        <img src={Imagem2} alt="Produto-6" id="image" />
                        <div>
                            <h3>Produto-6</h3>
                            <p>R$ 180,00</p>
                        </div>
                    </section>

                    <section className="produto-item">
                        <img src={Imagem1} alt="Produto-7" id="image" />
                        <div>
                            <h3>Produto-7</h3>
                            <p>R$ 650,00</p>
                        </div>
                    </section>

                    <section className="produto-item">
                        <img src={Imagem4} alt="Produto-8" id="image" />
                        <div>
                            <h3>Produto-8</h3>
                            <p>R$ 170,00</p>
                        </div>
                    </section>

                    <section className="produto-item">
                        <img src={Imagem3} alt="Produto-9" id="image" />
                        <div>
                            <h3>Produto-9</h3>
                            <p>R$ 800,00</p>
                        </div>
                    </section>

                    <section className="produto-item">
                        <img src={Imagem2} alt="Produto-10" id="image" />
                        <div>
                            <h3>Produto-10</h3>
                            <p>R$ 630,00</p>
                        </div>
                    </section>

                    <section className="produto-item">
                        <img src={Imagem1} alt="Produto-11" id="image" />
                        <div>
                            <h3>Produto-11</h3>
                            <p>R$ 542,00</p>
                        </div>
                    </section>

                </article>
            </main>
        </>
    )
}
export default Home