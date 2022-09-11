import logo from "../../assets/images/logo.svg";
import "./styles.css";

export function Header() {
    return (
        <header>
            <div className="dashboard-logo-container">
                <img src={logo} alt="Sales app logo" />
                <h1>RqDealsForces</h1>
            </div>
        </header>
    );
}