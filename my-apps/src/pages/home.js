import Header from "../components/Header";
import Footer from "../components/Footer";
import Feature from "./feature";

const HomePage = {
    async render() {
        return /* html */`
                
            <div class="container">
        
                <header id="header" >
                    ${Header.render()}
                </header>

                <section class="news">
                    ${await Feature.render()}
                </section>
                
                <Footer>
                    ${Footer.render()}
                </Footer>
            </div>
        `;
    },
};

export default HomePage;