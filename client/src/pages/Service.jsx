import { useAuth } from "../store/auth";

export const Service = () => {

    const { services } = useAuth();

    return(
        <>
            <section className="section section-services">
                <div className="container">
                    <h2 className="common-heading">Services offers</h2>
                    <p>
                     Hello, this is services section where you can visit multiple services
                     like website design, photography, HTML, CSS, Javascript and so on
                    </p>
                </div>
                <div className="container grid grid-three-cols">
                    
                        {
                            services.map((curElem, index) => {
                                const { price, description, provider, service } = curElem;

                                return (
                                <div className="card" key={index}>
                                    <div className="service-box">
                                        <div className="grid grid-two-cols">
                                            <p>{provider}</p>
                                            <p>{price}</p>
                                        </div>
                                        <h3>{service}</h3>
                                        <p>{description}</p>
                                    </div>
                            </div>
                            );
                            })}
                    
                </div>
            </section>
        </>
    );
};