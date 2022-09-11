import axios from 'axios';
import { toast } from 'react-toastify';

import icon from "../../assets/images/notification-icon.svg";
import { BASE_URL } from '../../utils';
import "./styles.css";

const handleClick = (id: number) => {
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(() => toast.info("SMS notification successfully sent!"));
};
interface NotificationButtonProps {
    saleId: number;
}

export function NotificationButton({ saleId }: NotificationButtonProps) {
    return (
        <div
            className="dashboard-red-btn"
            onClick={() => handleClick(saleId)}
        >
            <img src={icon} alt="Notify sale" />
        </div>
    );
}