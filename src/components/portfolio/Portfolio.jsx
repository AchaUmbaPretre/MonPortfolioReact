import PortList from '../portList/PortList'
import './portfolio.css'

const Portfolio = () => {
  return (
    <>
        <div className="portfolio">
            <div className="portfolioWrapper">
                <div className="serviceTop">
                    <h1 className="about-right-h1">Mes portfolio</h1>
                    <p className="serviceTitleDesc">Better Design, Better Experiences</p>
                </div>
                <div className="portfolioBottom">
                  <PortList/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Portfolio