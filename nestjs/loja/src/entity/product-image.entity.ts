import { Entity, Column } from 'typeorm';

@Entity({ name: 'produto_imagem', engine: 'innodb', synchronize: true })
export class ProdutoImagem {

  @Column({ name: 'url', type: 'varchar', nullable: false })
  url: string;

  @Column({ name: 'descricao', type: 'varchar', nullable: false })
  descricao: string;
}