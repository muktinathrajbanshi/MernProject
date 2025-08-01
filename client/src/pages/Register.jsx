export const Register = () => {
    return(
        <>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img 
                            src="/images/registration.svg" 
                            alt="regtration img"
                            width="500"
                            height="500"    
                            />
                        </div>
                        {/* let's tackle registration form  */}
                        <div className="registration-form">
                            <h1 className="main-heading mb-3">registration form</h1>
                            <br />

                            <form>
                                <div>
                                    <label htmlFor="username">username</label>
                                    <input type="text" name="username" value={} placeholder=""/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
        </>
    )
   };