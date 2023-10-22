import {
  Entity, Column
} from "typeorm";

@Entity({ name: 'produto_caracteristicas', engine: 'innodb', synchronize: true })
export class ProdutoCaracteristicas {

  @Column({ name: 'nome', type: 'varchar', nullable: false })
  nome: string;

  @Column({ name: 'descricao', type: 'varchar', nullable: false })
  descricao: string;


}