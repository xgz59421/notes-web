DROP DATABASE IF EXISTS  db;
create database db charset=utf8;

drop table if EXISTS db.chat;
create table db.chat(
    id int auto_increment primary key comment 'id,PK',
    question text not null comment '问题 NN',
    answer text not null comment '回复 NN'
) COMMENT '聊天表';

insert into db.chat(question,answer) value('你好','你好');
insert into db.chat(question,answer) value('你是谁','我是聊天机器人');
insert into db.chat(question,answer) value('再见','再见');