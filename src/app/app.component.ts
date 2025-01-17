import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ChatComponent } from '../components/chat/chat.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sockets';
}
