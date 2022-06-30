import {FormulaDriver} from "../types/FormulaDriver";

function request<T>(url: string, method: string): Promise<T> {
    const options = {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }

    return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/${url}`, options)
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                console.log(res);
                return Promise.reject({
                    status: res.status,
                    type: res.type
                });
            }
        })
        .catch((error) => {
            return Promise.reject(error);
        });
}

export function getDrivers(): Promise<FormulaDriver[]> {
    return request<FormulaDriver[]>('drivers', 'GET');
}

export function overtake(overtakingDriverId: number): Promise<FormulaDriver[]> {
    return request<FormulaDriver[]>(`drivers/${overtakingDriverId}/overtake`, 'POST');
}