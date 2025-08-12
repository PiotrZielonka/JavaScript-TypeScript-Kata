import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import SharedModule from 'app/shared/shared.module';

@Component({
  selector: 'jhi-kata',
  templateUrl: './kata.component.html',
  imports: [SharedModule, RouterModule],
})
export class KataComponent {}
