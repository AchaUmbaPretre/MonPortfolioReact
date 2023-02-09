import './service.css'

const Service = () => {
  return (
    <>
        <div className="service">
            <div className="serviceWrapper">
                <div className="serviceTop">
                    <h1 className="about-right-h1">Mes services</h1>
                    <p className="serviceTitleDesc">Better Design, Better Experiences</p>
                </div>
                <div className="about-rows">
                    <div className="about-row">
                        <div className="about-icon">
                            <i className="fas fa-laptop icon"></i>
                        </div>
                        <h2 className="serviceH2">WEB DEVELOPPEMENT</h2>
                        <p className="serviceDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsa magni provident laborum animi nulla!?
                        </p>
                    </div>
                    <div className="about-row">
                        <div className="about-icon">
                            <i className="fas fa-pen icon"></i>
                        </div>
                        <h2 className="serviceH2">BRANDING DESIGNER</h2>
                        <p className="serviceDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsa magni provident laborum animi nulla!
                        </p>
                    </div>
                    <div className="about-row">
                        <div className="about-icon">
                            <i className="fa-brands fa-uikit icon"></i>
                        </div>
                        <h2 className="serviceH2">UI & UX</h2>
                        <p className="serviceDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsa magni provident laborum animi nulla!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Service