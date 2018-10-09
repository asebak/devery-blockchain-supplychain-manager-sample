import {Component, TemplateRef, ViewChild} from '@angular/core';
import {BlockchainService} from './blockchain/blockchain.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ContextService} from './context.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dialogRef: MatDialogRef<any>;
  app: any;

  @ViewChild('createNewAppTpl') createNewAppTpl: TemplateRef<any>;

  constructor(private dialog: MatDialog, private _service: BlockchainService, public contextSrv: ContextService) {
    this._service.getCurrentUser().then(user => {
      this.contextSrv.userId = user;
      this._service.getApp(this.contextSrv.userId).then(app => {
        this.app = app;
      }).catch(err => {
      });
    }).catch(err => {

    });
  }

  onCreateClick() {
    this.dialogRef = this.dialog.open(this.createNewAppTpl);
    this.dialogRef.afterClosed().subscribe(res => {
      //todo if already an app call createApp if app exists call updateApp
      this._service.updateApp(res.appName, res.accountId).then(transaction => {
        console.log(transaction.hash);
        }).catch(err => console.log(err));
    });
  }
}
