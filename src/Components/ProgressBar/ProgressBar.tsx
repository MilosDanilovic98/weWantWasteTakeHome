import {Calendar, CreditCard, MapPin, Shield, Trash, Truck} from "lucide-react";

const ProgressBar = () => {


    return (
        <ul className="steps w-full steps-vertical sm:steps-horizontal ">
            <li className="step step-primary cursor-pointer">
                <span className="step-icon"> <MapPin size={20}/></span>
                Postcode
            </li>
            <li className="step step-primary cursor-pointer">

                <span className="step-icon"> <Trash size={20}/></span>
                Waste Type
            </li>
            <li className="step step-primary cursor-pointer">

                <span className="step-icon"> <Truck size={20}/></span>
                Select Skip
            </li>
            <li className="step  color-red cursor-not-allowed">

                <span className="step-icon">  <Shield size={20}  color={'gray'}/></span>
                <span className="opacity-70"> Permit check</span>

            </li>
            <li className="step text-opacity-70 cursor-not-allowed ">

                <span className="step-icon">  <Calendar size={20}  color={'gray'}/></span>
                <span className="opacity-70"> Choose Date</span>

            </li>
            <li className="step  text-opacity-70 cursor-not-allowed">

                <span className="step-icon">  <CreditCard size={20}  color={'gray'}/></span>
                <span className="opacity-70"> Payment</span>

            </li>
        </ul>
    );
};

export default ProgressBar;