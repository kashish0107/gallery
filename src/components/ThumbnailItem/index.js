// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, updateImage, isActiveThumb} = props
  const {
    id,
    imageUrl,
    thumbnailUrl,
    imageAltText,
    thumbnailAltText,
  } = thumbnailDetails

  const selectImage = () => {
    updateImage(id)
  }

  const thumbImgVisibleStyle = isActiveThumb && 'visible-thubnail'

  return (
    <li className="li-items">
      <button>
        <img
          alt={thumbnailAltText}
          className={`thumb-images ${thumbImgVisibleStyle}`}
          onClick={selectImage}
          src={thumbnailUrl}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
