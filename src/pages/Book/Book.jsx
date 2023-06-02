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
                  // <div className="card"
        // onClick={() => selectBarber(barber)}
        // key={barber.id}>
        //     <img src={barber.img_url} alt="profile" />
        //     <div className="card-info">
        //         <h1>{barber.name}</h1>
        //         <p>{barber.description}</p>
        //     </div>
                // </div>
    })


return (
    <div className="provider-card-container">
        {barbers}
    </div>
)
}

export default Book