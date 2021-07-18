import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTableMessages1625531285968 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tb_messages',
                columns: [
                    {
                        name: 'id',
                        type: 'serial',
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: 'description',
                        type: 'text',
                        isNullable: false
                    },
                    {
                        name: 'details',
                        type: 'text',
                        isNullable: false
                    },
                    {
                        name: 'id_user',
                        type: 'int',
                        isNullable: false
                    }
                ],
                foreignKeys: [
                    new TableForeignKey({
                        columnNames: ['id_user'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'tb_users',
                        onDelete: 'CASCADE'
                    })
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_messages');
    }

}
