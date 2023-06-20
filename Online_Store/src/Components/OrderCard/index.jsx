import { XMarkIcon } from "@heroicons/react/24/solid"
import './styles.css'

const OrderCard = (props) => {
    const { id, title, imageURL, price, handleDelete } = props
    return (
        <div className="flex justify-between items-center py-6">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full object-cover rounded-lg" src={imageURL} alt={title} />

                </figure>
                <p className=" title-truncate text-sm font-light truncate">{title}</p>
            </div>
            {
                handleDelete &&
                <XMarkIcon className="w-6 h-6 cursor-pointer"
                    onClick={() => handleDelete(id)}
                />
            }
        </div>
    )
}

export default OrderCard