import './Footer.css';

function Footer(){
    return(
            <footer>
                {/* <hr/>  */}
                <div className="container">
                    <div className="row d-flex justify-content-center ">
                        <p className="col-12 d-flex justify-content-center " style={{margin:'0'}}>
                            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                            Osmoze
                            <span>&#169;</span>
                            {new Date().getFullYear()} 
                            </p>
                            <p className="col-12 d-flex justify-content-center ">
                            <span> Made with </span>
                            <i className="fa fa-heart" aria-hidden="true" style={{marginInline:'0.25rem'}} ></i>
                            <span style={{marginRight:'0.25rem'}}> by </span>
                            <a href="https://www.sochem.org/" > Sochem Informatics Team</a>
                            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                        </p>
                    </div>
                </div>
            </footer> 
    )
}

export default Footer