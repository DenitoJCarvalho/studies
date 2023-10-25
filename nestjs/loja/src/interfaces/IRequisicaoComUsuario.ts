import { IPayload } from "./IPayload";

export interface IRequisicaoComUsuario extends Request {
  usuario: IPayload;
}