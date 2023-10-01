"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var classAbstract_1 = require("./classAbstract");
var Funcionario = /** @class */ (function (_super) {
    __extends(Funcionario, _super);
    function Funcionario(nome, sobrenome, job, salary) {
        var _this = _super.call(this, nome, sobrenome) || this;
        _this.sobrenome = sobrenome;
        _this.job = job;
        _this.salary = salary;
        return _this;
    }
    Funcionario.prototype.fullName = function () {
        return "\n      Nome: ".concat(this.nome, " ").concat(this.sobrenome, "\n      Fun\u00E7\u00E3o: ").concat(this.job, "\n      Sal\u00E1rio: ").concat(this.salary, "\n    ");
    };
    return Funcionario;
}(classAbstract_1.Pessoa));
var novo = new Funcionario('Adrian', 'Deni de Carvalho', 'Bagunçar', 5.00);
console.log(novo);
