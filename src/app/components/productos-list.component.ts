import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'productos-list',
  templateUrl: '../views/productos-list.html',
  providers: [ProductoService]
})
export class ProductosListComponent {
  public titulo: string;
  
  constructor(
    private _productoService: ProductoService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.titulo = 'Listado de productos';
  }

  ngOnInit(){
    console.log('productos-list.component.ts cargado');
    alert(this._productoService.getProductos());
  }

}
