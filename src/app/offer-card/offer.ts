export interface Offer {
  price: string;
  currency: string;
  origin: string;
  destination: string;
  journeyTime: string;
  segments: Leg[];
}

export interface Leg {
  departureStation: string;
  arrivalStation: string;
  departureDate: string;
  arrivalDate: string;
  departureTime: string;
  arrivalTime: string;
  airlineCode: string;
  flightNumber: string;
}
