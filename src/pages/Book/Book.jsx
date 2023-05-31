import { useContext } from "react";
import { PrimaryContext } from "../../components/contexts/PrimaryContext";
import "./Book.css"


const Book = () => {

const { serviceData } = useContext(PrimaryContext);


    const selectBarber = () => {
        console.log("hello")
    }


let appoinments = serviceData.map((barber) => {

    return (
        <div className="provider-card"
        onClick={selectBarber}
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
        {appoinments}
    </div>
)
}

export default Book