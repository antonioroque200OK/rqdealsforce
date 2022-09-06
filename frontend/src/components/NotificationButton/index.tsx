import icon from "../../assets/images/notification-icon.svg";
import "./styles.css";

export function NotificationButton() {
    return (
        <div className="dashboard-red-btn">
            <img src={icon} alt="Notify sale" />
        </div>
    );
}