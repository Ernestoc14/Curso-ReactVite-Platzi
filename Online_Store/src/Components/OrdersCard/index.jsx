import { CalendarDaysIcon, ChevronRightIcon, ArchiveBoxIcon} from "@heroicons/react/24/solid"

const OrdersCard = (props) => {
    const { index, totalPrice, totalProducts } = props
    return (
        <div className="flex justify-between items-center p-6 w-80 border border-white mb-6 rounded-lg">
            <div className="flex justify-between w-full">
                <div className="flex flex-col w-1/2">
                    <span className="flex items-center gap-2">
                        <CalendarDaysIcon className="w-4 h-4" />
                        Order #: {index + 1}
                    </span>
                    <span className="flex items-center gap-2">
                        <ArchiveBoxIcon className="w-4 h-4" />
                        Items: {totalProducts}
                    </span>
                </div>
                <div className="flex items-center">
                    <span className="font-medium text-2xl">${totalPrice}</span>
                    <ChevronRightIcon className="w-6 h-6 flex items-center " />
                </div>
            </div>
        </div>
    )
}

export default OrdersCard