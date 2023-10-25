import {
  Entity, Column, CreateDateColumn,
  UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn
} from 'typeorm';

@Entity({ name: 'usuarios', engine: 'innodb', synchronize: true })
export class UserEntity {

  @PrimaryGeneratedColumn({ name: 'id', unsigned: true, type: 'tinyint' })
  id: string;

  @Column({ name: 'nome', length: 100, type: 'varchar', nullable: false })
  nome: string;

  @Column({ name: 'profissao', length: 100, type: 'varchar', nullable: false })
  profissao: string;

  @Column({ name: 'email', length: 100, type: 'varchar', nullable: false })
  email: string;

  @Column({ name: 'senha', length: 100, type: 'varchar', nullable: false })
  senha: string;

  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at', type: 'datetime' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at', type: 'datetime' })
  deletedAt: string
}