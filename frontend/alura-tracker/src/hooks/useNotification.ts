import { store } from "@/store";
import { NOTIFICAR } from "@/store/mutationsType";
import { notificacoesType } from "@/types/notificacoes";

type notificador = {
  notificar: (tipo: notificacoesType, titulo: string, texto: string) => void;
};

export function useNotification(): notificador {
  return {
    notificar(tipo: notificacoesType, titulo: string, texto: string): void {
      store.commit(NOTIFICAR, {
        tipo,
        titulo,
        texto,
      });
    },
  };
}
