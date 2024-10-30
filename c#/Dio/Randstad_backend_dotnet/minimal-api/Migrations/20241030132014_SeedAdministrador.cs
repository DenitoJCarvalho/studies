﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace minimal_api.Migrations
{
    /// <inheritdoc />
    public partial class SeedAdministrador : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Administradres",
                columns: new[] { "Id", "Email", "Perfil", "Senha" },
                values: new object[] { 1, "administrador@teste.com", "Adm", "12345678" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Administradres",
                keyColumn: "Id",
                keyValue: 1);
        }
    }
}
