import Carousel from 'react-bootstrap/Carousel'

export default function Banner() {
    return (
        <Carousel className='container mw-100 mh-75 p-0 clearfix'>
            <Carousel.Item className='row' interval={5000}>
                <img
                    className={'d-block w-100'}
                    src={`/slide/img_slide_01.jpg`}
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='row' interval={5000}>
                <img
                    className={'d-block w-100'}
                    src={`/slide/img_slide_02.jpg`}
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='row' interval={5000}>
                <img
                    className={'d-block w-100'}
                    src={`/slide/img_slide_03.jpg`}
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='row' interval={5000}>
                <img
                    className={'d-block w-100'}
                    src={`/slide/img_slide_04.jpg`}
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='row' interval={5000}>
                <img
                    className={'d-block w-100'}
                    src={`/slide/img_slide_05.jpg`}
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
