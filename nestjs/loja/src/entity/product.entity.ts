import {
  Entity, Column, PrimaryGeneratedColumn,
  CreateDateColumn, UpdateDateColumn, DeleteDateColumn
} from 'typeorm';

@Entity({ name: 'products', engine: 'innodb', synchronize: true })
export class ProcuctEntity {

  @PrimaryGeneratedColumn({ name: 'produto_id', unsigned: true, type: 'tinyint' })
  id: string;

  @Column({ name: 'usuario_id', type: 'tinyint' })
  usuarioID: string;

  @Column({ name: 'nome', length: 100, type: 'varchar', nullable: false })
  nome: string;

  @Column({ name: 'valor', length: 10, type: 'integer', nullable: false })
  valor: number;

  @Column({ name: 'quantidade', length: 100, type: 'integer', nullable: false })
  quantidade: number;

  @Column({ name: 'descricao', length: 255, type: 'varchar', nullable: false })
  descricao: string;

  @Column({ name: 'categoria', length: 50, type: 'varchar', nullable: false })
  categoria: string;

  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at', type: 'datetime' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at', type: 'datetime', collation: 'utf8mb4_general_ci' })
  deletedAt: string;
}