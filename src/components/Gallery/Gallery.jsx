import React, {useState} from 'react'
// import Lightroom from 'react-lightbox-gallery'
import AwesomeLightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';
import GalleryImg1 from "../../assets/images/gallery/g1.jpg"
import GalleryImg3 from "../../assets/images/gallery/g3.jpg"
import GalleryImg4 from "../../assets/images/gallery/g4.jpg"
import GalleryImg6 from "../../assets/images/gallery/g6.jpg"
import GalleryImg7 from "../../assets/images/gallery/g7.jpg"


const Gallery = () => {

    const [openLightbox, setOpenLightbox] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    var images = [
        {
            src: GalleryImg1,
            desc: "Person wearing shoes",
            sub: "Gift Habeshaw"
        },
        {
            src: GalleryImg3,
            desc: "Blonde woman wearing sunglasses smiling at the camera ",
            sub: "Dmitriy Frantsev"
        },
        {
            src: GalleryImg6,
            sub: "Harry Cunningham"
        },
        {
            src: GalleryImg4,
            desc: "Jaipur , Rajasthan India",
            sub: "Liam Baldock"
        },
        {
            src: GalleryImg7,
            sub: "Verne Ho"
        },
        {
            src: GalleryImg6,
            desc: "Rann of kutch , India",
            sub: "Hari Nandakumar"
        },
    ];

    // var settings = {
    //     columnCount: {
    //         default: 3,
    //         mobile: 2,
    //         tab: 3
    //     },
    //     mode: "dark",
    //     enableZoom:false,
    // };

    const openGallery = (index) => {
        setCurrentIndex(index);
        setOpenLightbox(true);
      };
    
      const closeGallery = () => {
        setOpenLightbox(false);
      };
    return (
        // <Lightroom images={images} settings={settings} />
        <div className="gallery">
            <div className="gallery-images">
                {images.map((image, index) => (
                <div className="image-container" key={index}>
                    <img 
                    src={image.src} 
                    alt={image.desc || image.sub} 
                    onClick={() => openGallery(index)} 
                    style={{ cursor: 'pointer' }} 
                    />
                </div>
                ))}
            </div>

            {openLightbox && (
                <AwesomeLightbox
                images={images.map(image => image.src)}  // Just an array of image sources
                startIndex={currentIndex}
                onClose={closeGallery}
                />
            )}
    </div>
   );
}

export default Gallery