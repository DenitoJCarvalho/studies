import {
  Entity, Column, CreateDateColumn,
  UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn
} from 'typeorm';

@Entity({ name: 'Users' })
export class UserEntity {

  @PrimaryGeneratedColumn({ unsigned: true, })
  id: string;

  @Column({ name: 'nome', length: 100, charset: 'utf-8', nullable: false, collation: 'utf8mb4_general_ci' })
  nome: string;

  @Column({ name: 'profissao', length: 100, charset: 'utf-8', nullable: false, collation: 'utf8mb4_general_ci' })
  profissao: string;

  @Column({ name: 'email', length: 100, charset: 'utf-8', nullable: false, collation: 'utf8mb4_general_ci' })
  email: string;

  @Column({ name: 'senha', length: 100, charset: 'utf-8', nullable: false, collation: 'utf8mb4_general_ci' })
  senha: string;

  @CreateDateColumn({ name: 'created_at', charset: 'utf-8', collation: 'utf8mb4_general_ci' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at', charset: 'utf-8', collation: 'utf8mb4_general_ci' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at', charset: 'utf-8', collation: 'utf8mb4_general_ci' })
  deletedAt: string
}