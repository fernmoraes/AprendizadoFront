import '../css/loja.css'
import Imagem1 from '../assets/Imagem1.jpg'
import Imagem2 from'../assets/Imagem2.jpg'
import Imagem3 from '../assets/Imagem3.jpg'
import Imagem4 from '../assets/Imagem4.jpg'


const Home = () => {
    return (
        <>
            <header>
                <h1>Loja City</h1>
            </header>
            <main>
                <article className="produto-grid">

                    <section className="produto-item" >
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

                        <section className="produto-item ">
                            <img src={Imagem3} alt="Produto-2" id="image" />
                            <div>
                                <h3>Produto-3</h3>
                                <p>R$ 300,00</p>
                            </div>
                        </section>

                        <section className="produto-item ">
                            <img src={Imagem4} alt="Produto-2" id="image" />
                            <div>
                                <h3>Produto-4</h3>
                                <p>R$ 400,00</p>
                            </div>
                        </section>

                        <section className="produto-item ">
                            <img src={Imagem1} alt="Produto-2" id="image" />
                            <div>
                                <h3>Produto-5</h3>
                                <p>R$ 500,00</p>
                            </div>
                        </section>

                        <section className="produto-item ">
                            <img src={Imagem2} alt="Produto-2" id="image" />
                            <div>
                                <h3>Produto-6</h3>
                                <p>R$ 600,00</p>
                            </div>
                        </section>

                        <section className="produto-item ">
                            <img src={Imagem3} alt="Produto-2" id="image" />
                            <div>
                                <h3>Produto-7</h3>
                                <p>R$ 700,00</p>
                            </div>
                        </section>

                        <section className="produto-item ">
                            <img src={Imagem4} alt="Produto-2" id="image" />
                            <div>
                                <h3>Produto-8</h3>
                                <p>R$ 800,00</p>
                            </div>
                        </section>

                        <section className="produto-item ">
                            <img src={Imagem1} alt="Produto-2" id="image" />
                            <div>
                                <h3>Produto-9</h3>
                                <p>R$ 900,00</p>
                            </div>
                        </section>

                        <section className="produto-item ">
                            <img src={Imagem2} alt="Produto-2" id="image" />
                            <div>
                                <h3>Produto-10</h3>
                                <p>R$ 1000,00</p>
                            </div>
                        </section>

                        <section className="produto-item ">
                            <img src={Imagem3} alt="Produto-2" id="image" />
                            <div>
                                <h3>Produto-11</h3>
                                <p>R$ 1100,00</p>
                            </div>
                        </section>

                        <section className="produto-item ">
                            <img src={Imagem4} alt="Produto-2" id="image" />
                            <div>
                                <h3>Produto-12</h3>
                                <p>R$ 1200,00</p>
                            </div>
                        </section>
                        
                </article>

            </main>
        </>
    )
}
export default Home