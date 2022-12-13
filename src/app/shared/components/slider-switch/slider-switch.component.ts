import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Item } from '../../models/inner.models';

@Component({
  selector: 'app-slider-switch',
  templateUrl: './slider-switch.component.html',
  styleUrls: ['./slider-switch.component.scss'],
})
export class SliderSwitchComponent implements AfterViewInit, OnInit {
  @Input() categories!: Item[];
  @ViewChild('slider') el!: ElementRef;
  selectedCategory!: string;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer.setStyle(
      this.el.nativeElement,
      'width',
      `calc(100% / ${this.categories.length})`
    );
  }

  ngOnInit(): void {
    this.selectedCategory = this.categories[0].id;
  }

  calculateCssTranslateAmount(index: number) {
    if (index === 0) return 0;
    return -(index * 100 - 10);
  }

  selectCategory(category: string, index: number) {
    this.selectedCategory = category;
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `translate(${this.calculateCssTranslateAmount(index)}%)`
    );
  }
}
