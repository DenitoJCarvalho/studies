import { Entity, Column } from 'typeorm';

@Entity({ name: 'produto_imagem', engine: 'innodb', synchronize: true })
export class ProdutoImagem {

  @Column({ name: 'url', type: 'varchar', charset: 'utf-8', nullable: false, collation: 'utf8mb4_general_ci' })
  url: string;

  @Column({ name: 'descricao', type: 'varchar', charset: 'utf-8', nullable: false, collation: 'utf8mb4_general_ci' })
  descricao: string;
}