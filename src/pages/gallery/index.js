import dynamic from "next/dynamic";
const GalleryContainer = dynamic(() => import('../../components/gallery'), { ssr: false })

const Gallery = () => {
    return(<GalleryContainer />)
}

export default Gallery