import { image404 } from "assets";
import "styles/main.css";
import "./invalid-page.css";

const InvalidPage = () => {
    return(
        <div className="image-404-container">
            <img alt= "404 image" src={image404} class="error-404-img"/>
        </div>
    );
}

export default InvalidPage;