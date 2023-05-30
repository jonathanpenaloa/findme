import { useContext } from "react";
import { PrimaryContext } from "../../components/contexts/PrimaryContext";


const Book = () => {

const { serviceData, setServiceData} = useContext(PrimaryContext);

// console.log(serviceData)
// console.log(serviceData.availableTimeSlots)

    const selectBarber = () => {
        console.log("hello")
    }


let appoinments = serviceData.map((barber) => {
    console.log(barber.availableTimeSlots)
    return (
        <div 
        onClick={selectBarber}
        key={barber.id}>
            <img src={barber.img} alt="profile-picture" />
            <h1>{barber.name}</h1>
            <p>{barber.description}</p>
        </div>
    )
})


return (
    <div>
        {appoinments}
    </div>
)
}

export default Book