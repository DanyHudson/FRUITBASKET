import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-singlefruit',
  imports: [],
  templateUrl: './singlefruit.html',
  styleUrl: './singlefruit.scss'
})
export class Singlefruit {
  @Input() fruit = {
    name: "Apfel",
    img: "apple.png",
    description: "Äpfel sind aufgrund ihres hohen Wassergehalts kalorienarm und enthalten nur Spuren von Fett und Eiweiß, dafür aber rund zwei Prozent Ballaststoffe und etwa elf Prozent Kohlenhydrate. Äpfel enthalten auch viele Vitamine und Mineralstoffe und sind daher eine wichtige Quelle für uns - zum Beispiel für Vitamin C.",
    genus: "Kernobstgewächsen innerhalb der Familie der Rosengewächse",
    stars: 2.3,
    reviews: [{ name: "Kevin W.", text: "ist lecker" }, { name: "Arne P.", text: "nicht so meins" }],
  };

@Output() fruitName = new EventEmitter<string>();

emitName() {
  this.fruitName.emit(this.fruit.name);
}

}


// explanation how this woks:
// Here’s how all these pieces work together in Angular:

// In singlefruit.ts (the child component):
// You define @Output() fruitName = new EventEmitter<string>();.
// This creates a custom event called fruitName that the child can emit.
// The emitName() method calls this.fruitName.emit(this.fruit.name);,
// which triggers the fruitName event and sends the fruit’s name as data.

// In singlefruit.html:
// You have a button with (click)="emitName()".
// When the button is clicked, emitName() is called, which emits the fruitName event.

// In fruitlist.html (the parent component’s template):
// You use <app-singlefruit (fruitName)="nameLog($event)" [fruit]="singlefruit"></app-singlefruit>.
// (fruitName)="nameLog($event)" means: “When the child emits the fruitName event,
// call the parent’s nameLog method and pass the emitted value ($event) to it.”

// In fruitlist.ts (the parent component):
// The nameLog(name: string) method receives the emitted value and logs it.

// How it comes together:
// The child emits the fruitName event →
// the parent listens for this event in its template →
// when the event is emitted,
// the parent’s nameLog method is called with the emitted value.

// This is how Angular enables communication from a child component to its parent using @Output and EventEmitter.



// Why use @Output and EventEmitter?

// It allows child components to communicate with their parent components without tightly coupling them together.
// It keeps components reusable: the child doesn’t need to know what the parent will do with the event.
// It helps organize code, especially in larger apps, by separating concerns.
// Realistic examples:

// Form components: A custom input or form component emits a value or “submit” event to the parent when the user is done.
// Dialogs/Modals: A modal component emits a “close” or “confirm” event when the user clicks a button,
// so the parent can react (e.g., save data, close the modal).
// List items: Each item in a list (like a shopping cart) emits an event when the user clicks “remove” or “edit,” and the parent updates the list.
// Star rating: A star rating component emits the new rating when the user clicks a star, so the parent can save it.
// In summary: This pattern is essential for building interactive UIs where components need to notify their parents about user actions,
// but you want to keep your code clean and components independent.