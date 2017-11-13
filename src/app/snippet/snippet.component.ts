import { Component } from '@angular/core';
import { FECompoment } from '../fe/fe.component';

@Component({
  selector: 'snippet-root',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.css'],
  providers: [FECompoment],
})
export class SnippetComponent {
  title2 = 'Code Snippet';
  text: any;

  constructor(private fe: FECompoment) {
    this.text = fe.getFullName();
  }

  /* Now send your form using FormData */
}
