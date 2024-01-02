import { Component } from '@angular/core';
import { AddPipe } from '../add.pipe';
import { MultPipe } from '../mult.pipe';
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [AddPipe,MultPipe],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

}
