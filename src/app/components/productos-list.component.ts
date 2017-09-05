import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'productos-list',
  templateUrl: '../views/productos-list.html',
  providers: [ProductoService]
})
export class ProductosListComponent {
  public titulo: string;
  public productos: Producto[];

  constructor(
    private _productoService: ProductoService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.titulo = 'Listado de productos';
  }

  ngOnInit(){
    console.log('productos-list.component.ts cargado');
    this._productoService.getProductos().subscribe(
      result => {
        this.productos = result.data;

        if(result.code != 200){
          console.log(result);
        }else{
          this.productos = result.data;
        }

      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
