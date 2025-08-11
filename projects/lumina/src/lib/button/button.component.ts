<<<<<<< HEAD
import { Component } from '@angular/core';

@Component({
  selector: 'lib-button',
  imports: [],
=======
import { Component, computed, input, output } from '@angular/core';
import { ButtonSize, ButtonType } from '../Utils/Types/ButtonTypes';
import clsx from "clsx"
import { CommonModule } from '@angular/common';

@Component({
  selector: 'LuminaButton',
  imports: [CommonModule],
>>>>>>> 2aed19c (initial commit)
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
<<<<<<< HEAD
=======
  
  buttonType = input<ButtonType>("success");
  disabled = input<boolean>(false);
  size = input<ButtonSize>("sm")
  click = output<void>()
  buttonVariants = {
    base : "inline-flex items-center justify-center gap-2 text-sm disabled:opacity-50 rounded-md transition-all duration-200",
    "success":"bg-green-500 text-white hover:bg-green-600",
    "danger" : "bg-red-500",
    "outline" : "" ,
    "secondary" : "",
    "contrast" : ""
  }
  buttonSizes = {
    "sm" : "px-3 py-1",
    "lg" : "px-3 py-2",
    "md" : "px-3 py-2"
  }
  classes = computed(
    () => {
      const cls = clsx(this.buttonVariants.base , this.buttonVariants[this.buttonType()] , this.buttonSizes[this.size()]);
      console.log(cls);
      console.log(document.getElementById("btn"));
      return clsx(this.buttonVariants.base , this.buttonVariants[this.buttonType()] , this.buttonSizes[this.size()])
    }
  )
  // get classes() : string {
  //   const cls = clsx(this.buttonVariants.base , this.buttonVariants[this.buttonType()] , this.buttonSizes[this.size()])
  //   console.log(cls);
  //   return cls;
  // } 
>>>>>>> 2aed19c (initial commit)

}
