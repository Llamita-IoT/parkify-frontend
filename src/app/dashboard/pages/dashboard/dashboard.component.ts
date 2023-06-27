import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Slot} from "../../model/Slot";
import {NgForm} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {DashboardService} from "../../service/dashboard.service";
import {CommonModule} from "@angular/common";
import {getTreeNoValidDataSourceError} from "@angular/cdk/tree";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  timeElapsed: string='';
  currentTime: string='';
  constructor() {
    setInterval(() => {
      this.getCurrentTime();
    }, 1000);
  }
  getCurrentTime() {
    const date = new Date();
    this.currentTime = date.toLocaleTimeString();
  }

  calculateTimeElapsed(lastChange: string): string {
    const currentTime = new Date();
    const lastChangeTime = new Date();
    const [lastChangeHours, lastChangeMinutes] = lastChange.split(':');

    lastChangeTime.setHours(Number(lastChangeHours));
    lastChangeTime.setMinutes(Number(lastChangeMinutes));

    const timeDifference = currentTime.getTime() - lastChangeTime.getTime();
    const timeElapsed = this.formatTimeDifference(timeDifference);

    return timeElapsed;
  }

  formatTimeDifference(timeDifference: number): string {
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    const formattedTime =
      (hours % 24).toString().padStart(2, '0') +
      ':' +
      (minutes % 60).toString().padStart(2, '0') +
      ':' +
      (seconds % 60).toString().padStart(2, '0');

    return formattedTime;
  }
  slots: Slot[] =[
    {
      id: 0,
      status: 'busy',
      lastChange: '10:30',
      driver: 'John Doe',
    },
    {
      id: 1,
      status: 'available',
      lastChange: '11:45',
      driver: 'Jane Smith',
    },
    {
      id: 2,
      status: 'busy',
      lastChange: '13:15',
      driver: 'Alex Johnson',
    },
    {
      id: 3,
      status: 'reserved',
      lastChange: '14:20',
      driver: 'Michael Brown',
    },
    {
      id: 4,
      status: 'busy',
      lastChange: '11:50',
      driver: 'Emily Davis',
    },
    {
      id: 5,
      status: 'available',
      lastChange: '12:35',
      driver: 'David Wilson',
    },
    {
      id: 6,
      status: 'busy',
      lastChange: '10:45',
      driver: 'Sarah Johnson',
    },
    {
      id: 7,
      status: 'available',
      lastChange: '9:10',
      driver: 'Robert Smith',
    },
    {
      id: 8,
      status: 'busy',
      lastChange: '8:25',
      driver: 'Jennifer Lee',
    },
    {
      id: 9,
      status: 'available',
      lastChange: '13:40',
      driver: 'Daniel Anderson',
    },
    {
      id: 10,
      status: 'reserved',
      lastChange: '13:15',
      driver: 'Sophia Martinez',
    },
    {
      id: 11,
      status: 'available',
      lastChange: '2:30',
      driver: 'William Johnson',
    },
    {
      id: 12,
      status: 'reserved',
      lastChange: '15:05',
      driver: 'Olivia Brown',
    },
    {
      id: 13,
      status: 'available',
      lastChange: '7:20',
      driver: 'James Wilson',
    },
    {
      id: 14,
      status: 'busy',
      lastChange: '8:35',
      driver: 'Emma Davis',
    },
    {
      id: 15,
      status: 'available',
      lastChange: '8:50',
      driver: 'Liam Johnson',
    },
    {
      id: 16,
      status: 'busy',
      lastChange: '9:15',
      driver: 'Ava Smith',
    },
    {
      id: 17,
      status: 'available',
      lastChange: '10:30',
      driver: 'Noah Johnson',
    },
    {
      id: 18,
      status: 'busy',
      lastChange: '12:45',
      driver: 'Isabella Davis',
    },
    {
      id: 19,
      status: 'reserved',
      lastChange: '13:20',
      driver: 'Mia Wilson',
    },
  ];

}
