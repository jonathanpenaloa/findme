import { useContext } from "react";
import { PrimaryContext } from "../../components/contexts/PrimaryContext";


const Book = () => {

const { serviceData } = useContext(PrimaryContext);


    const selectBarber = () => {
        console.log("hello")
    }


let appoinments = serviceData.map((barber) => {

    return (
        <div 
        onClick={selectBarber}
        key={barber.id}>
            <img src={barber.img_url} alt="profile" />
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