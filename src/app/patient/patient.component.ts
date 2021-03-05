import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

export interface UserData {
  patientId: string;
  scanDate: string;
  reportStatus: string;
  actions: string;
}

const ELEMENT_DATA: UserData[] = [
  {patientId: "test_123", scanDate: 'Hydrogen', reportStatus: 'Available', actions: 'H'},
  {patientId: "test_123", scanDate: 'Helium', reportStatus: 'Available', actions: 'He'},
  {patientId: "test_123", scanDate: 'Lithium', reportStatus: 'Available', actions: 'Li'},
  {patientId: "test_123", scanDate: 'Beryllium', reportStatus:'Available', actions: 'Be'},
  {patientId: "test_123", scanDate: 'Boron', reportStatus: 'Available', actions: 'B'}
];

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit   {

  displayedColumns: string[] = ['patientId', 'scanDate', 'reportStatus', 'actions'];
  dataSource = ELEMENT_DATA;
  page = 4;
  today : Date = new Date();
  constructor() { 
    
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
  }



}



