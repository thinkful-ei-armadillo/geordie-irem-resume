'use strict';


function App() {
    return (
        <div id="content-container">
            <header>
                <h1 align="middle">Sally Salonga</h1>
            </header>
            <main role="main">
                <aside>
                    <img src="https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg" style="float: right" alt="Sally's Headshot in a Mustard Yellow, Long-Sleeve with Zebra Prints"> </img>
                </aside>
                <section role="region">
                    <p>
                        <div>
                            <h2>Education</h2>
                            B.S. in Mechanical Engineering, Tufts University, 2010.
                        </div>
                        <div>
                            <h2>Experience</h2>
                            <ul>
                                <li>
                                    Developer, Adobe, 2012-14<br></br>
                                    coded the conversion of images into web-editable documents.
                                </li>
                                <li>
                                    Intern, Visio, 2011-12<br></br>
                                    coded the upload of images into web
                                </li>
                            </ul>
                        </div>
                    </p>
                </section>
            </main>
            <footer role="contefino">
                <p class="postal-address" align-middle>
                    Sally Salonga <br />
                    (617) 542-1443 <br />
                    15 Park Drive <br />
                    Boston, MA, 02240 <br />
                </p>
                <address>
                    <a href="mailto:sallysalonga@gmail.com" target="_blank">email me!</a>
                </address>                
            </footer>
        </div>
    );
};

ReactDOM.render(<App>/</App>, document.querySelector('body'));