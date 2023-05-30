import { useState, createContext } from "react"
import {barber_data}  from "../../barber_data.js"
export const PrimaryContext = createContext()

const PrimaryContextProvier = (props) => {

    const [formData, setFormData] = useState({})
    const [user, setUser] = useState({
        // id => google
        //name => google
        //url => google
        //email => google
    })
    const [avialableApps, setAvailabeApps] = useState([])
    const [selectedProvider, setSelectedProvider] = useState([])
    const [userApps, setUserApps] = useState([{
        // id: String barber 
        // time: time for app
    }])
    const [serviceData, setServiceData] = useState(barber_data)

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