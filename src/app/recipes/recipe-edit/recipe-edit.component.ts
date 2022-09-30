import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { interval, Subscription, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  id: number;
  // we also wanna find out if we are editing the recipe
  // or creating a new one
  editMode = false;
  // we store this info into a property set by default to false
  // By that we assume we are creating a recipe, not editing an existing one

  private firstObsSubs: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      // We use '+' to convert it to a number
      // id is the name of the dynamic parameter in our route set up
      this.editMode = params['id'] != null;
      // we see if params has an id property
      // if it has one then params will be a string with the id
      // otherwise undefined
      // if we compare to null,meaning if it's not equal to null we check if it has the id
      // will only be not undefined if we are not in editMode
      console.log(this.editMode);
    });

    const customIntervalObservable = new Observable((observer) => {
      let count = 0;

      setInterval(() => {
        if (count == 5) {
          observer.error(new Error('Count is greater than 2'));
        }
        if (count <= 5) {
          observer.next(count);
          count++;
        } else {
          observer.complete();
        }
      }, 1000);
    });

    // We can use Operators on any Observable by calling a method pipe

    this.firstObsSubs = customIntervalObservable
      .pipe(
        filter((data) => {
          return data > 0;
        }),
        map((data: number) => {
          return 'Round: ' + data;
        })
      )
      .subscribe({
        next: (data) => console.log(data),
        complete: () => console.log('completed'),
        error: () => console.log('Error'),
      });
    // this.firstObsSubs = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    // interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
  }

  ngOnDestroy(): void {
    this.firstObsSubs.unsubscribe();
  }
}
