import { Injectable } from "@angular/core";
import { Hotel } from "../utilitarian/models/hotel.model";

@Injectable({
  providedIn: 'root'
})

export class HotelService {
  hotels: Hotel[] = [
    {
      name:'Lakewood',
      rating: 3,
      weekdayRateRegular: 110,
      weekdayRateRewards: 80,
      weekendRateRegular: 90,
      weekendRateRewards: 80
    },

    {
      name: 'Bridgewood',
      rating: 4,
      weekdayRateRegular: 160,
      weekdayRateRewards: 110,
      weekendRateRegular: 60,
      weekendRateRewards: 50
    },

    {
      name: 'Ridgewood',
      rating: 5,
      weekdayRateRegular: 220,
      weekdayRateRewards: 100,
      weekendRateRegular: 150,
      weekendRateRewards: 40
    }


  ];
}
