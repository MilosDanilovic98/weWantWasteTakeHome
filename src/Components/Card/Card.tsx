import {Skip} from "../../types.ts";

type CardProps = {
    data: Skip;
};

const Card = ({data}: CardProps) => {
    console.log(data)
    return (
        <div className="card w-96 bg-base-100 shadow-xl border hover:border-blue-500">
            <div className="card-body">
                <div className="flex gap-2 flex-wrap">
                    <span className="badge badge-md badge-warning">Most Popular</span>
                    <span className="badge badge-md badge-primary">{data.hire_period_days} day hire period</span></div>

                <div className="flex justify-between">
                    <h2 className="text-4xl font-bold">{data.size} Yard Skip</h2>

                </div>
                <div className="badge badge-outline badge-accent">£{data.price_before_vat} per week</div>
                <ul className="mt-6 flex flex-col gap-2 text-lg">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        {data.size < 10 ?
                            <span>Great for house clear-outs</span>
                            : data.size < 15 ? <span>Great for medium jobs</span> :
                                <span>Great for very big jobs</span>

                        }

                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span>Fits ~{10 * data.size} bin bags</span>
                    </li>
                    {data?.allowed_on_road ?
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success"
                                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                            </svg>
                            <span>Allowed on road</span>
                        </li> :
                        <li className="opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="size-4 me-2 inline-block text-base-content/50" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                            </svg>
                            <span className="line-through">Allowed on road</span>
                        </li>
                    }

                    {data?.allows_heavy_waste ?
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success"
                                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                            </svg>
                            <span>Allowed heavy waste</span>
                        </li> :
                        <li className="opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="size-4 me-2 inline-block text-base-content/50" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                            </svg>
                            <span className="line-through">Allowed heavy waste</span>
                        </li>
                    }


                </ul>
                <div className="mt-auto">
                    <button className="btn btn-primary btn-block">Select this skip</button>
                </div>
            </div>
        </div>
    );
};

export default Card;