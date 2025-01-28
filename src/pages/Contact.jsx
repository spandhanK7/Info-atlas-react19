export const Contact = () => {

    const handleSubmit = (formData)=> {
        const formInputData = Object.fromEntries(formData.entries())       //convert formData (i.e an iteration of key value pairs) into an object 
        console.log(formInputData)
    }

    return (
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>

            <div className="contact-wrapper container">
                <form action={ handleSubmit }>
                    <input
                        type="text"
                        className="form-control"
                        required autoComplete="off"
                        placeholder="Enter your name"
                        name="username"
                    />

                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        required
                        placeholder="Enter your email"
                        autoComplete="off"
                    />

                    <textarea
                        className="form-control"
                        rows="10"
                        placeholder="Enter your message"
                        name="message"
                        required
                        autoComplete="off"
                    ></textarea>

                    <button type="submit" value="Send">Send</button>
                </form>
            </div>


        </section>
    )
}