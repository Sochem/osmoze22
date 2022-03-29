function Carousel(){
    return(
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style={{'height':'80%'}}>
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-100" src="/assets/images/gallery/1.jpg" alt="First slide" />
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="/assets/images/gallery/2.jpg" alt="Second slide" />
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="/assets/images/gallery/3.jpg" alt="Third slide" />
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="/assets/images/gallery/4.JPG" alt="Third slide" />
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="/assets/images/gallery/5.JPG" alt="Third slide" />
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="/assets/images/gallery/6.JPG" alt="Third slide" />
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="/assets/images/gallery/7.JPG" alt="Third slide" />
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="/assets/images/gallery/8.jpg" alt="Third slide" />
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="/assets/images/gallery/9.jpg" alt="Third slide" />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>            
        </div>
    );
}

export default Carousel;