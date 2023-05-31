import { useContext } from "react";
import { PrimaryContext } from "../../components/contexts/PrimaryContext";
import "./Book.css"
import { useNavigate } from "react-router-dom";


const Book = () => {

    const navigate = useNavigate()
const { serviceData, setSelectedProvider } = useContext(PrimaryContext);


    const selectBarber = (barber) => {
        setSelectedProvider(barber)
        navigate('/DashBoard');
    }


let barbers = serviceData.map((barber) => {

    return (
        <div className="provider-card"
        onClick={() => selectBarber(barber)}
        key={barber.id}>
            <img src={barber.img_url} alt="profile" />
            <div>
                <h1>{barber.name}</h1>
                <p>{barber.description}</p>
            </div>
        </div>
    )
})


return (
    <div>
        {barbers}
    </div>
)
}

export default Book