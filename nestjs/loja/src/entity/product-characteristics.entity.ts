import {
  Entity, Column
} from "typeorm";

@Entity({ name: 'produto_caracteristicas', engine: 'innodb', synchronize: true })
export class ProdutoCaracteristicas {

  @Column({ name: 'nome', type: 'varchar', charset: 'utf-8', nullable: false, collation: 'utf8mb4_general_ci' })
  nome: string;

  @Column({ name: 'descricao', type: 'varchar', charset: 'utf-8', nullable: false, collation: 'utf8mb4_general_ci' })
  descricao: string;


}