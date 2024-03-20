import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

/*
A directive is not ok
try to use a componet and in tmeplate can have
<template #horizont>2 divs<template>
<tempplate #vertical>2 divs<template>
*/

@Directive({
  selector: '[divideDiv]',
  standalone: true,
})
export class DivideDivDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click')
  public onClick(): void {

    console.info('divide');
    // Create two new divs
    const newDiv1 = this.renderer.createElement('div');
    const newDiv2 = this.renderer.createElement('div');

    // Apply some styles to the new divs
    this.renderer.setStyle(newDiv1, 'height', '50%');
    this.renderer.setStyle(newDiv2, 'height', '50%');


    this.renderer.addClass(newDiv1, 'widget-canvas-container');
    this.renderer.addClass(newDiv2, 'widget-canvas-container');

    this.renderer.setAttribute(newDiv1, 'divideDiv', '');
    this.renderer.setAttribute(newDiv2, 'divideDiv', '');

    // Add the new divs to the parent div
    this.renderer.appendChild(this.el.nativeElement, newDiv1);
    this.renderer.appendChild(this.el.nativeElement, newDiv2);

    // Wrap the new divs in a parent div
    const parentDiv = this.renderer.createElement('div');
    this.renderer.addClass(parentDiv, 'widget-canvas-container');
    this.renderer.appendChild(parentDiv, newDiv1);
    this.renderer.appendChild(parentDiv, newDiv2);

    // Replace the original div with the parent div
    const grandParent = this.el.nativeElement.parentNode;
    this.renderer.removeChild(grandParent, this.el.nativeElement);
    this.renderer.appendChild(grandParent, parentDiv);
  }
}
