import { Component, EventEmitter,OnInit, Output} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { WorldinfoService } from '../services/worldinfo.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrl: './world.component.scss'
})
export class WorldComponent implements OnInit {
  svgClicked = new EventEmitter<MouseEvent>();
  pathClicked = new EventEmitter<string>();
  pathMouseOver = new EventEmitter<string>();
  pathMouseOut = new EventEmitter<string>();
  svgMouseOver = new EventEmitter<MouseEvent>();
  svgMouseOut = new EventEmitter<MouseEvent>();
 

  
  countryData: any = [];
  countryInfo: any = {};
  
  firstName ="";
  constructor(private WorldinfoService: WorldinfoService) { }
  ngOnInit(): void {

  }
  onSvgClick(event: MouseEvent) {
    this.svgClicked.emit(event);
  }

  onPathClick(event: MouseEvent, pathId: string) {
    this.pathClicked.emit(pathId);
    //console.log(pathId);
    this.fetchInfo(pathId);
  }

  onPathMouseOver(event: MouseEvent, pathId: string) {
    this.pathMouseOver.emit(pathId);
    this.fetchInfo(pathId);
  }

  onPathMouseOut(event: MouseEvent, pathId: string) {
    this.pathMouseOut.emit(pathId);
    this.fetchInfo(pathId);
  }

  onSvgMouseOver(event: MouseEvent) {
    this.svgMouseOver.emit(event);
  }
  onSvgMouseOut(event: MouseEvent) {
    this.svgMouseOut.emit(event);
  }
 
 
  fetchInfo(path: string) {
      
    this.WorldinfoService.getWorldInfo(path).subscribe((data: any[][]) => {
      this.countryData = data[1][0]
      this.countryInfo = {
        "name": this.countryData.name,
        "capitalCity": this.countryData.capitalCity,
       "region": this.countryData.region.value,
        "incomeLevel": this.countryData.incomeLevel.value,
        "latitude": this.countryData.latitude,
        "longitude": this.countryData.longitude,
      }
      
      console.log(this.countryInfo)

    }, (error: any) => {
      console.log(error, 'Not working')
    });
  }
        }





 


  

