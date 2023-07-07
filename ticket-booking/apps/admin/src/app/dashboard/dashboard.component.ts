import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { sign } from 'crypto';

export interface TicketData {
  seats: seatData[],
  type: string
}

export interface seatData {
  seatNo: number,
  status: string,
  category: number,
  bookedBy: string,
  gender: string,
  row: number
}


@Component({
  selector: 'ticket-booking-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  bookticket = signal<boolean>(false);
  ticketDetails = signal<seatData[]>([]);
  selectedSeatDetails = signal<number>(0)

  constructor(private http: HttpClient) {}

  bookTicket(): void {
    this.bookticket.set(true);

    this.http.get<TicketData>('../../assets/mock-data.json').subscribe({
      next: (res: TicketData) => {
        this.ticketDetails.set(res.seats);
      }
    })
  }

  selectedSeat(event: any, seatNo: number): void {
    console.log(event, '***', seatNo)
  }
}
