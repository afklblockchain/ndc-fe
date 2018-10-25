export interface Offer {
  price: number;
  currency: string;
  origin: string;
  dest: string;
  travelTime: string;
  legs: Leg[];
}

export interface Leg {
  origin: string;
  dest: string;
  timeDeparture: string;
  timeArrival: string;
  dateDeparture: string;
  dateArrival: string;
  flightNumber: string;
}
