import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UsersService } from '../services/users.service';
import { Response } from '../interface/Response.interface';
import { Coordinate } from '../interface/Coordinate.interface';
import * as Leaflet from 'leaflet';
import { User } from '../interface/User.interface';
@Component({
  selector: 'app-details-users',
  templateUrl: './details-users.component.html',
  styleUrls: ['./details-users.component.css']
})
export class DetailsUsersComponent {
  user: User;
  mode: 'edit' | 'locked' = 'locked';
  buttonText: 'Save Changes' | 'Edit' = 'Edit';
  marker = new Leaflet.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconSize: [32, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize: [41, 41]
  });

  constructor(private activatedRoute: ActivatedRoute, private userService: UsersService) { }

  ngOnInit(): void {
    this.user = (<User>(this.activatedRoute.snapshot.data['resolvedResponse'].results[0]));
    console.log(this.user);
    this.loadMap(this.user.coordinate);
    // this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
    //   console.log('User ID:', params.get('uuid')!);
    //   this.userService.getUser(params.get('uuid')!).subscribe(
    //     (response: any) => {
    //       console.log(response);
    //       this.response = response;
    //     }
    //   );
    // });
  }

  changeMode(mode?: 'edit' | 'locked'): void {
    console.log(mode);
    this.mode = this.mode === 'locked' ? 'edit' : 'locked';
    this.buttonText = this.buttonText === 'Edit' ? 'Save Changes' : 'Edit';
    if(mode === 'edit') {
      // Logic to update the user on the back end
      console.log('Updating using on the back end');
    }
  }

  private loadMap(coordinate: Coordinate): void {
    const latitude: number = parseFloat(coordinate.latitude);
    const longitude: number = parseFloat(coordinate.longitude);
    const map = Leaflet.map('map', {
    
      center: [latitude, longitude],
      zoom: 8
    });
    const mainLayer = Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      tileSize: 512,
      zoomOffset: -1,
      minZoom: 1,
      maxZoom:19,
      crossOrigin: true,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    mainLayer.addTo(map);
    const marker = Leaflet.marker([latitude, longitude], { icon: this.marker });
    marker.addTo(map).bindPopup(`${this.user.firstName}'s Location`).openPopup();
  }

  
  
   
} 


