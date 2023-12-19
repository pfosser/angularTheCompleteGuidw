import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    // All the observables provided by angular are managed by the framework and
    // you do not need to unsubscribe
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
  }

  onActivate() {
    this.userService.activatedEmitter.emit(true);
  }
}
