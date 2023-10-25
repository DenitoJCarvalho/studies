import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { AutenticaDto } from '../dto/autenticaDTO';

import { AutenticacaoService } from '../services/autenticacao.service';

@Controller('autenticacao')
export class AutenticacaoController {

  constructor(
    private readonly AutenticacaoService
  ) { }

  @Post('login')
  login(@Body() { email, senha }: AutenticaDto) {
    this.AutenticacaoService.login(email, senha);
  }

}
