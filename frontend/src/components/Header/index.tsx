import logo from "../../assets/images/logo.svg";
import "./styles.css";

export function Header() {
    return (
        <header>
            <div className="dashboard-logo-container">
                <img src={logo} alt="Sales app logo" />
                <h1>RoqueForces</h1>
            </div>
        </header>
    );
}