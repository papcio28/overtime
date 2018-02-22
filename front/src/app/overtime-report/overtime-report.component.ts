import { Component, OnInit } from '@angular/core';
import { Overtime } from '../overtime';
import { Location } from '@angular/common';
import { OvertimeService } from '../overtime.service';

@Component({
  selector: 'app-overtime-report',
  templateUrl: './overtime-report.component.html',
  styleUrls: ['./overtime-report.component.css']
})
export class OvertimeReportComponent implements OnInit {
  overtime: Overtime;

  constructor(private location: Location, private overtimeService: OvertimeService) {
    this.overtime = new Overtime(new Date(Date.now()), 1);
  }

  ngOnInit() { }

  onSave() {
    this.reportOvertime(this.overtime);
  }

  onReduce() {
    this.reportOvertime(this.overtime.withNegativeHours());
  }

  reportOvertime(overtime: Overtime) {
    this.overtimeService.reportOvertime(overtime)
      .subscribe(_ => {
        this.location.back();
      }, err => {
        console.log(err);
      });
  }
}
