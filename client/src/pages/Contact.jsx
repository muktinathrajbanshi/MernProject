export const Contact = () => {
    return(
        <>
            <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">contact us</h1>
                </div>
                {/* contact page main  */}
                <div className="container grid grid-two-cols">
                    <div className="contact-img">
                        <img src="/images/available.svg" alt="24/7 img" />
                    </div>
                    {/* contact content  */}
                    <section className="section-form">
                        <form>
                            <div>
                                <label htmlFor="username">username</label>
                                <input type="text" 
                                name="username"
                                id="username"
                                autoComplete="off"
                                required
                                />
                            </div>
                            <div>
                                <label htmlFor="email">email</label>
                                <input type="email" 
                                name="email"
                                id="email"
                                autoComplete="off"
                                required
                                />
                            </div>
                            <div>
                            <label htmlFor="message">message</label>
                            <textarea 
                            name="message" 
                            id="message" 
                            cols="30" 
                            rows="10"> 
                            </textarea>
                            </div>
                            <div>
                                <button type="submit">submit</button>
                            </div>
                        </form>
                    </section>
                </div>
            </section>
        </>   
    );
};