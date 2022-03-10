import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {

  }

  clientsList: any;

  getClient() {
    this.clientService.getClients().subscribe((res) => {
      this.clientService.clientsList = res.data;
      console.log(res.data);
      this.clientsList = this.clientService.clientsList;
    })
  }

}
