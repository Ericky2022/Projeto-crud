import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snakbar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snakbar.open(msg, 'X',
    {duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

}
