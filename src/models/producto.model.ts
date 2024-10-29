import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Marca} from './marca.model';
import {Categoria} from './categoria.model';
import {Categoriaproducto} from './categoriaproducto.model';
import {Imagen} from './imagen.model';

@model({settings: {strict: false}})
export class Producto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'number',
    required: true,
  })
  precio: number;

  @property({
    type: 'string',
    required: true,
  })
  existencia: string;

  @property({
    type: 'number',
    required: true,
  })
  calificacion: number;

  @property({
    type: 'number',
  })
  descuento?: number;

  @belongsTo(() => Marca, {name: 'tiene_marca'})
  id_marca: number;

  @hasMany(() => Categoria, {through: {model: () => Categoriaproducto, keyFrom: 'id_producto', keyTo: 'id_cateforia'}})
  categorias: Categoria[];

  @hasMany(() => Imagen, {keyTo: 'id_producto'})
  imagens: Imagen[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Producto>) {
    super(data);
  }
}

export interface ProductoRelations {
  // describe navigational properties here
}

export type ProductoWithRelations = Producto & ProductoRelations;
