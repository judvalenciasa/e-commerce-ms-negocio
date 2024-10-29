import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Categoriaproducto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  id_producto?: number;

  @property({
    type: 'number',
  })
  id_cateforia?: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Categoriaproducto>) {
    super(data);
  }
}

export interface CategoriaproductoRelations {
  // describe navigational properties here
}

export type CategoriaproductoWithRelations = Categoriaproducto & CategoriaproductoRelations;
