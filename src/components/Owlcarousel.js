import { Component } from 'react';


class Owlcarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                {
                    id: 0,
                    location: '/assets/images/gallery/1.jpg',
                },
                {
                    id: 1,
                    location: '/assets/images/gallery/2.png',
                },
                {
                    id: 2,
                    location: '/assets/images/gallery/3.jpg',
                },
                {
                    id: 3,
                    location: '/assets/images/gallery/4.JPG',
                },
                {
                    id: 4,
                    location: '/assets/images/gallery/5.JPG',
                },
                {
                    id: 5,
                    location: '/assets/images/gallery/6.JPG',
                },
                {
                    id: 6,
                    location: '/assets/images/gallery/7.JPG',
                }
            ],
        };
    }


    render() {

        const photo = this.state.images.map((image)=> {
            if(image.id=='0')
            {
                return(
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={image.location} alt=""  />
                    </div>
                );
            }
            else
            {
                return(
                    <div class="carousel-item">
                        <img class="d-block w-100" src={image.location} alt="" />
                    </div>
                );
            }
        })

        return(
            <div className="row d-flex justify-content-center">
                <div id="carouselExampleIndicators" class="carousel slide " data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                    </ol>
                    <div class="carousel-inner">
                        {photo}
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

}

export default Owlcarousel
