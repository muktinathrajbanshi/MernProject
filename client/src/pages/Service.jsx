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
                     like website design, web hosting, web development and so on.
                    </p>
                </div>
                <div className="container grid grid-three-column">
                    
                        {
                            services.map((curElem, index) => {
                                const { price, description, provider, service, icon } = curElem;

                                return (
                                <div key={index}>
                                    <div className="service-box">
                                        
                                         <ion-icon name={icon} className="service-icon" />

                                        <h3>{service}</h3>
                                        <p>{description}</p>
                                        <div className=" grid-two-column">
                                            <p>{provider}</p>
                                        </div>
                                    </div>
                            </div>
                            );
                            })}
                    
                </div>
            </section>
        </>
    );
};