import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from '../chat-box/chat-box.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../shared/shared/shared.module';
// import { UserDetailsComponent } from '../../shared/user-details/user-details.component';

//for routing
import { RouterModule, Routes } from '@angular/router';
import { JoinGroupComponent } from '../join-group/join-group.component';
import { GroupComponent } from '../group/group.component';
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forChild([
      { path: 'chat', component: ChatBoxComponent },
      { path: 'joinGroup/:receiverId/:receiverName', component: JoinGroupComponent },
      { path: 'showDetails', component: GroupComponent }
    ]),
    SharedModule
  ],
  declarations: [ChatBoxComponent, JoinGroupComponent, GroupComponent]
})
export class ChatModule { }
