import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Slot} from "../../model/Slot";
import {MatLegacyTableDataSource} from "@angular/material/legacy-table";
import {NgForm} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {DashboardService} from "../../service/dashboard.service";
import {getXHRResponse} from "rxjs/internal/ajax/getXHRResponse";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  slotData: Slot;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'ID',
    'Status',
    'LastChange',
    'User',
    'Historial'
  ];

  @ViewChild('slotForm', {static: false})
  slotForm! : NgForm;

  @ViewChild(MatPaginator, {static: true})
  paginator! : MatPaginator;

  @ViewChild(MatSort)
  sort! : MatSort;

  constructor(private dashboardService: DashboardService) {
    this.slotData = {} as Slot;
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.getAllSlots();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAllSlots(){
    this.dashboardService.getAllSlot().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

}
