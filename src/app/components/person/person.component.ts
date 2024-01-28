import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Person } from 'src/app/core/models/person';
import {MatDialog} from '@angular/material/dialog';
import { PersonService } from 'src/app/core/servcies/person.service';
import { ActionState } from 'src/app/core/enums/ActionState';
import { ConfirmationDialogComponent } from 'src/app/shared/component/confirmation-dialog/confirmation-dialog/confirmation-dialog.component';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
  export class PersonComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
  
    public displayedColumns: string[] = ['firstName', 'age', 'job'];
    public columnsToDisplay: string[] = [...this.displayedColumns, 'actions'];
  
    public columnsFilters = {};
  
    public dataSource: MatTableDataSource<Person>;
    private serviceSubscribe!: Subscription;
  
    constructor(private personsService: PersonService, public dialog: MatDialog) {
      this.dataSource = new MatTableDataSource<Person>();
    }   
    preview(source: Person) {
      const dialogRef = this.dialog.open(PersonComponent, {
        width: '400px',
        data: {
          source: source,
          action: ActionState.Preview
        },
      });
    }
    add() {
      const dialogRef = this.dialog.open(PersonComponent, {
        width: '400px',
        data: {
          action: ActionState.Add
        },
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.personsService.add(result);
        }
      });
  
    }
    edit(source: Person) {
      const dialogRef = this.dialog.open(PersonComponent, {
        width: '400px',
        data: {
          source: source,
          action: ActionState.Edit
        },
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.personsService.edit(result);
        }
      });
    }
    delete(id: any) {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.personsService.remove(id);
        }
      });
    }

  
    ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  
    ngOnInit(): void {
      this.personsService.getAll();
      this.serviceSubscribe = this.personsService.persons$.subscribe(res => {
        this.dataSource.data = res;
      })
    }
  
    ngOnDestroy(): void {
      this.serviceSubscribe.unsubscribe();
    }
  }
