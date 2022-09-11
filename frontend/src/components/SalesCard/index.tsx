import { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { NotificationButton } from "../NotificationButton";
import { BASE_URL, formattedValue } from "../../utils";

import type { Sale } from "../../models/sale";
import "./styles.css";



export function SalesCard() {
    const yearPeriod = new Date().getDate() - 365;
    const fromDate = new Date(new Date().setDate(yearPeriod));
    const toDate = new Date();

    const [minDate, setMinDate] = useState<Date>(fromDate);
    const [maxDate, setMaxDate] = useState<Date>(toDate);

    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/sales`)
            .then(response => setSales(response.data.content));
    }, []);

    return (
        <div className="dashboard-card">
            <h2 className="dashboard-sales-title">Vendas</h2>
            <div>
                <div className="dashboard-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dashboard-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dashboard-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dashboard-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="dashboard-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map((sale: Sale) => {

                            return (
                                <tr key={sale.id}>
                                    <td className="show992">{`#${sale.id}`}</td>
                                    <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                                    <td>{sale.sellerName}</td>
                                    <td className="show992">{sale.visited}</td>
                                    <td className="show992">{sale.deals}</td>
                                    <td>{`\$ ${formattedValue(sale.amount)}`}</td>
                                    <td>
                                        <div className="dashboard-red-btn-container">
                                            <NotificationButton />
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}