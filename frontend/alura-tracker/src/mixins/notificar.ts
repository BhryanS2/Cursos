import { NOTIFICAR } from "@/store/mutationsType";
import { notificacoesType } from "@/types/notificacoes";
import { store } from "@/store";

export const notificacaoMixin = {
  methods: {
    notificar(tipo: notificacoesType, titulo: string, texto: string): void {
      store.commit(NOTIFICAR, { tipo, titulo, texto });
    },
  },
};
