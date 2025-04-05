import './App.css'
import ProgressBar from "./Components/ProgressBar/ProgressBar.tsx";
import Card from "./Components/Card/Card.tsx";
import {useEffect, useState} from "react";
import {Skip} from "./types.ts";

function App() {

    const [cards, setCards] = useState<Skip[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Skip data:', data);
                setCards(data);
                setLoading(false);
                // You can now work with the data object
            })
            .catch(error => {
                console.error('Error fetching skips:', error);
            });
    },[])

    return (
        <div className="p-2 md:p-12">
            <ProgressBar/>
            <h1 className="w-full text-center text-4xl mt-12">Choose your skip size</h1>
            <div className="md:px-32 mt-12">
                <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-blue border ">
                    <div className="collapse-title font-semibold">How to choose the correct size?</div>
                    <div className="collapse-content text-sm">
                        Here we can put some text about what to think about when choosing the skip size
                    </div>
                </div>
            </div>



            <form className="filter w-full justify-center align-center mt-12">
                <input className="btn btn-square text-3xl " type="reset" value="×"/>
                <input className="btn  text-3xl p-6" type="radio" name="frameworks" aria-label="Small"/>
                <input className="btn text-3xl p-6" type="radio" name="frameworks" aria-label="Medium"/>
                <input className="btn text-3xl p-6" type="radio" name="frameworks" aria-label="Big"/>
            </form>

            {loading?

                <div className="flex gap-4 justify-center flex-wrap w-full mt-12">
                    <div className="flex w-100 flex-col gap-4">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>

                    <div className="flex  w-100 flex-col gap-4">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>
                    <div className="flex  w-100 flex-col gap-4">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>
                    <div className="flex  w-100 flex-col gap-4">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>



                </div>
                :
                <div className="flex gap-4 justify-center flex-wrap w-full mt-12">
                    {cards.map((skip, index) => (
                        <Card key={index} data={skip}/>
                    ))}
                </div>

            }



        </div>
    )
}

export default App
