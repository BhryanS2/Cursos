import Avaliador from "@/views/Avaliador";
import { mount, RouterLinkStub } from "@vue/test-utils";
import flushPromises from "flush-promises";

jest.mock("@/http");

const user = {
  id: 1,
  name: "User",
  email: "user@gmail.com",
  password: "123456",
};

describe("Usuario acessa a plataforma e", () => {
  test("faz login", async () => {
    getLeiloes.mockResolvedValueOnce(leiloes);

    const wrapper = mount(Avaliador, {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });

    await flushPromises();

    const totalLeiloesExibidos = wrapper.findAll(".leilao").length;
    expect(totalLeiloesExibidos).toBe(leiloes.length);
  });
  test("não há leilões retornados pela API", async () => {
    getLeiloes.mockResolvedValueOnce([]);

    const wrapper = mount(Avaliador, {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });

    await flushPromises();

    const totalLeiloesExibidos = wrapper.findAll(".leilao").length;
    expect(totalLeiloesExibidos).toBe(0);
  });
});
