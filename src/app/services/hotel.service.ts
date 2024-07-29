import { Injectable } from '@angular/core';
import {Hotel} from "../model/hotel.model";


@Injectable({
  providedIn: 'root'
})
export class HotelService {
  hotels: Hotel[] = [
    {
      name: 'Lakewood',
      rating: 3,
      weekdayRateRegular: 110,
      weekdayRateRewards: 80,
      weekendRateRegular: 90,
      weekendRateRewards: 80,
      imageUrl: 'assets/images/lakewood.jpg'
    },
    {
      name: 'Bridgewood',
      rating: 4,
      weekdayRateRegular: 160,
      weekdayRateRewards: 110,
      weekendRateRegular: 60,
      weekendRateRewards: 50,
      imageUrl: 'assets/images/bridgewood.jpg'
    },
    {
      name: 'Ridgewood',
      rating: 5,
      weekdayRateRegular: 220,
      weekdayRateRewards: 100,
      weekendRateRegular: 150,
      weekendRateRewards: 40,
      imageUrl: 'assets/images/ridgewood.jpg'
    }
  ];

  calculateCheapestHotel(typeOfCustomer: string, dates: string[]): { hotel: Hotel, price: number } {
    let cheapestHotel: Hotel | null = null;
    let cheapestPrice = Infinity;

    for (const hotel of this.hotels) {
      let totalPrice = 0;

      for (const date of dates) {
        const day = new Date(date).getDay();
        const isWeekend = day === 5 || day === 6;

        if (typeOfCustomer === 'Regular') {
          totalPrice += isWeekend ? hotel.weekendRateRegular : hotel.weekdayRateRegular;
        } else {
          totalPrice += isWeekend ? hotel.weekendRateRewards : hotel.weekdayRateRewards;
        }
      }

      if (totalPrice < cheapestPrice || (totalPrice === cheapestPrice && hotel.rating > (cheapestHotel?.rating || 0))) {
        cheapestHotel = hotel;
        cheapestPrice = totalPrice;
      }
    }

    return { hotel: cheapestHotel!, price: cheapestPrice };
  }
}
