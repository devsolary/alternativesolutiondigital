import "./NotFound.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    const [countDown, setCountDown] = useState(10);

    useEffect(() => {
        if (countDown > 0) {
            setTimeout(() => {
                for(let i = 0; i <= 10; i++) {
                    setCountDown(countDown - 1);
                }
            }, 1000);
    
            return () => clearTimeout();
        } else {
            navigate("/")
        }
    });

    const toHomePage = () => {
        navigate("/")
    }


    return ( <>
    <div className="NotFound">
        <div>
            <h1>This URL does not exist...</h1>
            <p>redirecting to home page {countDown} secs</p>
            <button onClick={toHomePage}>Go to Homepage</button>
        </div>
    </div>
    </> );
}
 
export default NotFound;