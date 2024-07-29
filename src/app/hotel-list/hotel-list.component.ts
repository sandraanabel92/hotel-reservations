import { Component } from '@angular/core';
import {Hotel} from "../model/hotel.model";
import {HotelService} from "../services/hotel.service";


@Component({
  selector: 'app-root',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent {
  typeOfCustomer: string = 'Regular';
  dates: string[] = [];
  cheapestHotel: Hotel | null = null;
  cheapestPrice: number | null = null;

  constructor(protected hotelService: HotelService) {}

  addDate(date: string) {
    if (date && !this.dates.includes(date)) {
      this.dates.push(date);
    }
  }

  findCheapestHotel() {
    const result = this.hotelService.calculateCheapestHotel(this.typeOfCustomer, this.dates);
    this.cheapestHotel = result.hotel;
    this.cheapestPrice = result.price;
    this.dates = [];
  }
}
