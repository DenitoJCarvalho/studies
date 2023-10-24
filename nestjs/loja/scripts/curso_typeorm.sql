
use fill_tecnologia;

create table if not exists usuarios
(
	usuario_id tinyint not null auto_increment,
    nome varchar(100) not null,
    profissao varchar(100) not null,
    email varchar(100) unique not null ,
    created_at timestamp not null default now(),
    updated_at timestamp not null default now(),
    deleted_at timestamp,
    
    primary key(usuario_id)
) 
engine = 'InnoDB', 
charset = 'utf8mb4',
collate = 'utf8mb4_general_ci' ;

alter table usuarios add column senha varchar(100) not null after email;
alter table usuarios modify column senha varchar(100) not null after email;
alter table usuarios modify created_at datetime not null default now();
alter table usuarios modify updated_at datetime not null default now();
alter table usuarios modify deleted_at datetime;

select * from usuarios;

create table if not exists produtos
(
	produto_id tinyint unsigned not null auto_increment,
    user_id tinyint not null,
    nome varchar(100) not null,
    valor int(10) not null,
    quantidade int(100) not null,
    descricao varchar(255) not null,
    categoria varchar(50) not null,
    created_at datetime not null default now(),
    updated_at datetime not null default now(),
    deleted_at timestamp,
    
    primary key(produto_id),
    
    constraint fk_usuario_produto foreign key (user_id) references usuarios(usuario_id)
)
engine = 'InnoDB', 
charset = 'utf8mb4',
collate = 'utf8mb4_general_ci';
