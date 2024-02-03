export interface Child {
    name: string,
    age: number
}

export interface Passengers {
    id: number,
    fullName: string,
    checkedIn: boolean,
    checkInDate?: number | null,
    child?: Child[] | null,
}

export interface Passenger {
    passengers: Passengers[]
}