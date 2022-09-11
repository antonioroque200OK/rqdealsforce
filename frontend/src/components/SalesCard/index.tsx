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

    const [fromDateState, setFromDateState] = useState<Date>(fromDate);
    const [toDateState, setToDateState] = useState<Date>(toDate);

    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(() => {
        const [fromDateISO, toDateISO] = [fromDateState, toDateState]
            .map((date: Date) => date.toISOString().slice(0, 10));

        const queryString = `fromDate=${fromDateISO}&toDate=${toDateISO}`;

        axios.get(`${BASE_URL}/sales?${queryString}`)
            .then(response => setSales(response.data.content));
    }, [fromDateState, toDateState]);

    return (
        <div className="dashboard-card">
            <h2 className="dashboard-sales-title">Vendas</h2>
            <div>
                <div className="dashboard-form-control-container">
                    <DatePicker
                        selected={fromDateState}
                        onChange={(date: Date) => setFromDateState(date)}
                        className="dashboard-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dashboard-form-control-container">
                    <DatePicker
                        selected={toDateState}
                        onChange={(date: Date) => setToDateState(date)}
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