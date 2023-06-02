import { useContext } from "react";
import { PrimaryContext } from "../../components/contexts/PrimaryContext";
import "./Book.css"
import { useNavigate } from "react-router-dom";
import ProfileCard from "../../components/ProfileCard/ProfileCard";


const Book = () => {

    const navigate = useNavigate()

const { serviceData, setSelectedProvider } = useContext(PrimaryContext);


const selectBarber = (barber) => {
    setSelectedProvider(barber)
    navigate('/DashBoard');
}

let barbers = serviceData.map((barber) => {
            
    return <ProfileCard 
    key={barber.id} 
    name={barber.name} 
    selectBarber={selectBarber} 
    barber={barber}
    description={barber.description} 
    url={barber.img_url} />
    })


return (
    <div className="provider-card-container">
        {barbers}
    </div>
)
}

export default Book