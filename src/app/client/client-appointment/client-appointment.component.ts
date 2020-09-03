import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-appointment',
  templateUrl: './client-appointment.component.html',
  styleUrls: ['./client-appointment.component.scss']
})
export class ClientAppointmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addAppointment(event): void {
    alert('New Appointment');
  }

  filter(event): void {
    alert('Filter Working');
  }

}
