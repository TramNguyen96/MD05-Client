import "./loading.scss";
import Icon from './load.png'

export default function Loading() {
    return (
        <div className="loading_container">
            <img
                className="rotating-image"
                src={Icon}
            />
        </div>
    );
}
