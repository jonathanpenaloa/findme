import { useState, createContext } from "react"
import {barber_data}  from "../../barber_data.js"

export const PrimaryContext = createContext()

const PrimaryContextProvier = (props) => {

    const [formData, setFormData] = useState({
        id: "email",
        name: "",
        email: "",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnb_I_OQt7Mcts15Kf9qwVchNCE7SJlkfYQ&usqp=CAU"
    });

    const [user, setUser] = useState(null);
    
    const [avialableApps, setAvailabeApps] = useState([])

    
    const [userApps, setUserApps] = useState([{
        id: "",
        time: ""
    }])
    
    const [serviceData, setServiceData] = useState(barber_data)
    
    const [selectedProvider, setSelectedProvider] = useState(serviceData[0])

    return (
        <PrimaryContext.Provider value={
            {
                formData, setFormData,
                user, setUser,
                avialableApps, setAvailabeApps,
                selectedProvider, setSelectedProvider,
                userApps, setUserApps,
                serviceData, setServiceData
            }
        }>
            {props.children}
        </PrimaryContext.Provider>
    )
}

export default PrimaryContextProvier