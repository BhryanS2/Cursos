export enum notificacoesType {
  SUCESSO,
  FALHA,
  ALERTA,
}

export type notificacoesProps = {
  titulo: string;
  texto: string;
  tipo: notificacoesType;
  id: number;
};
