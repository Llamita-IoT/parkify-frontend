import { Component } from '@angular/core';
@Component({
  selector: 'app-manager-profile',
  templateUrl: './manager-profile.component.html',
  styleUrls: ['./manager-profile.component.css']
})
export class ManagerProfileComponent {
  manager = {
    managerName : 'Juanito Alimaña',
    parkingSlots : 40,
    costPerHour : 7,
    address : 'Av. Salaverry 258',
    reference : 'Al costado de campo de marte'
  }
}


