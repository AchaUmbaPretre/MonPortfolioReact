import './portList.css'
import portfolio1 from './../../asserts/portfolio1.png'
import portfolio2 from './../../asserts/portfolio2.png'
import portfolio3 from './../../asserts/portfolio3.png'
import portfolio7 from './../../asserts/portfolio7.png'
import portfolio5 from './../../asserts/portfolio5.png'
import porfolio6 from './../../asserts/porfolio6.png'

const PortList = () => {
  return (
    <>
        <div className="portList">
            <div className="portRow">
                <div className="portCircle"></div>
                <div className="portCircle"></div>
                <div className="portCircle"></div>
            </div>
            <a to={''}>
                <img src={portfolio1} alt="" className="portImg" />
            </a>
        </div>
        <div className="portList">
            <div className="portRow">
                <div className="portCircle"></div>
                <div className="portCircle"></div>
                <div className="portCircle"></div>
            </div>
            <a to={''}>
                <img src={portfolio2} alt="" className="portImg" />
            </a>
        </div>
        <div className="portList">
            <div className="portRow">
                <div className="portCircle"></div>
                <div className="portCircle"></div>
                <div className="portCircle"></div>
            </div>
            <a to={''}>
                <img src={portfolio3} alt="" className="portImg" />
            </a>
        </div>
        <div className="portList">
            <div className="portRow">
                <div className="portCircle"></div>
                <div className="portCircle"></div>
                <div className="portCircle"></div>
            </div>
            <a to={''}>
                <img src={portfolio7} alt="" className="portImg" />
            </a>
        </div>
        <div className="portList">
            <div className="portRow">
                <div className="portCircle"></div>
                <div className="portCircle"></div>
                <div className="portCircle"></div>
            </div>
            <a to={''}>
                <img src={portfolio5} alt="" className="portImg" />
            </a>
        </div>
        <div className="portList">
            <div className="portRow">
                <div className="portCircle"></div>
                <div className="portCircle"></div>
                <div className="portCircle"></div>
            </div>
            <a to={''}>
                <img src={porfolio6} alt="" className="portImg" />
            </a>
        </div>
    </>
  )
}

export default PortList