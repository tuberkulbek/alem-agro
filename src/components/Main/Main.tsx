import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { entriesType, getCatalogAction } from "../../app/redux/main"
import { RootState, useAppDispatch } from "../../app/redux/store"
import Modal from "../Modal/Modal"


const Main: React.FC = () => {
    const dispatch = useAppDispatch()
    const data = useSelector((state: RootState) => state.main)
    const [modal, setModal] = useState<boolean>(false)
    const [modalInfo, setModalInfo] = useState<entriesType | null>(null)
    const handleOpenModal = (element: entriesType) => {
        setModal(true)
        setModalInfo(element)
    }
    const catalog = data.entries.map((element, index) => {
        if (index < 50) {
            return <div className="catalog-item" onClick={()=>handleOpenModal(element)}>
                <div>
                    Description: {element.Description}
                </div>
                <div>
                    Category: {element.Category}
                </div>
            </div>;
        }
    });
    console.log(data)

    useEffect(() => {
        if (!data.count) {
            dispatch(getCatalogAction())
        }
    }, [])
    
    return (
        <div className="catalog_wrapper">
            {modal && <Modal modalInfo={modalInfo} onClose={() => setModal(false)} />}
            {catalog}
        </div>
    )
}
export default Main