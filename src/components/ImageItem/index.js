import './index.css'

const ImageItem = props => {
  const {imageDetails} = props
  const {id, imageUrl} = imageDetails

  return (
    <li className="image-list-container">
      <img src={imageUrl} alt={`item${id}`} className="images" />
    </li>
  )
}

export default ImageItem
