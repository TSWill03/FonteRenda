const form = document.querySelector("#offer-form");
const promiseOutput = document.querySelector("#promise-output");
const scopeOutput = document.querySelector("#scope-output");
const messageOutput = document.querySelector("#message-output");
const followupOutput = document.querySelector("#followup-output");
const planOutput = document.querySelector("#plan-output");
const whatsappCta = document.querySelector("#whatsapp-cta");
const copyButtons = document.querySelectorAll(".copy-button");

const defaultState = {
  brand: "",
  service: "",
  audience: "",
  pain: "",
  goal: "",
  edge: "",
  whatsapp: "",
};

if (form) {
  hydrateForm();

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const values = {
      brand: normalizeText(data.get("brand")),
      service: normalizeText(data.get("service")),
      audience: normalizeText(data.get("audience")),
      pain: normalizeText(data.get("pain")),
      goal: normalizeText(data.get("goal")),
      edge: normalizeText(data.get("edge")),
      whatsapp: normalizeWhatsapp(data.get("whatsapp")),
    };

    persistForm(values);
    renderOffer(values);
  });
}

if (copyButtons.length > 0) {
  wireCopyButtons();
}

function renderOffer(values) {
  const servicePack = inferServicePack(values.service, values.goal, values.pain);
  const edgeLine = values.edge ? ` com ${values.edge}` : "";

  promiseOutput.textContent =
    `${values.brand} ajuda ${values.audience} a ${lower(values.goal)} sem continuar sofrendo com ${lower(values.pain)}${edgeLine}.`;

  scopeOutput.innerHTML = "";
  servicePack.scope.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    scopeOutput.appendChild(li);
  });

  messageOutput.textContent =
    `Oi! Vi ${pronoun(values.audience)} e pensei em uma forma simples de ${lower(values.goal)}. ` +
    `Eu trabalho com ${values.service} para ${values.audience} e montei uma ideia curta para atacar ${lower(values.pain)}. ` +
    `Se fizer sentido, eu te mando em 3 linhas.`;

  followupOutput.textContent =
    `Passando aqui de novo porque a ideia para ${values.audience} ainda pode ajudar a ${lower(values.goal)}. ` +
    `Se quiser, eu te mando um exemplo rapido de como eu faria isso usando ${servicePack.label}.`;

  planOutput.innerHTML = "";
  buildPlan(values, servicePack.label).forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    planOutput.appendChild(li);
  });

  if (values.whatsapp) {
    const inboundMessage =
      `Oi! Vi sua proposta e quero entender como ${values.brand} pode ajudar meu negocio a ${lower(values.goal)}.`;

    whatsappCta.href = `https://wa.me/${values.whatsapp}?text=${encodeURIComponent(inboundMessage)}`;
    whatsappCta.textContent = "Liberar CTA publico para cliente no WhatsApp";
    whatsappCta.classList.remove("disabled-link");
    whatsappCta.setAttribute("aria-disabled", "false");
  } else {
    whatsappCta.href = "#gerador";
    whatsappCta.textContent = "Adicione seu WhatsApp para liberar este CTA";
    whatsappCta.classList.add("disabled-link");
    whatsappCta.setAttribute("aria-disabled", "true");
  }
}

function inferServicePack(service, goal, pain) {
  const normalized = service.toLowerCase();

  if (normalized.includes("site") || normalized.includes("landing") || normalized.includes("pagina")) {
    return {
      label: "pagina enxuta de conversao",
      scope: [
        `Pagina clara focada em ${lower(goal)}`,
        `Texto principal voltado para atacar ${lower(pain)}`,
        "Chamada para WhatsApp ou formulario pronta para usar",
      ],
    };
  }

  if (normalized.includes("trafego") || normalized.includes("ads") || normalized.includes("anuncio")) {
    return {
      label: "campanha inicial de anuncios",
      scope: [
        `Estrutura de oferta para chamar atencao de ${lower(goal)}`,
        "Criativo ou copy inicial para testes rapidos",
        "Roteiro curto de ajuste baseado nas primeiras respostas",
      ],
    };
  }

  if (
    normalized.includes("automacao") ||
    normalized.includes("chatbot") ||
    normalized.includes("planilha") ||
    normalized.includes("processo")
  ) {
    return {
      label: "automacao basica de atendimento e processo",
      scope: [
        `Mapeamento do ponto onde ${lower(pain)} trava o negocio`,
        "Fluxo simples para economizar tempo ou responder mais rapido",
        "Organizacao de acompanhamento para nao perder contato",
      ],
    };
  }

  if (
    normalized.includes("video") ||
    normalized.includes("reels") ||
    normalized.includes("edicao") ||
    normalized.includes("conteudo") ||
    normalized.includes("design")
  ) {
    return {
      label: "pacote de conteudo focado em venda",
      scope: [
        `Peca principal pensada para ${lower(goal)}`,
        `Ajuste visual e textual para atacar ${lower(pain)}`,
        "Orientacao simples para publicacao e chamada para acao",
      ],
    };
  }

  return {
    label: "servico enxuto e bem explicado",
    scope: [
      `Entrega central orientada para ${lower(goal)}`,
      `Ajustes pensados para reduzir ${lower(pain)}`,
      "Acompanhamento curto por WhatsApp para manter o cliente seguro",
    ],
  };
}

function buildPlan(values, serviceLabel) {
  return [
    `Dia 1: fechar a promessa principal de ${values.brand} em uma frase.`,
    `Dia 2: listar 20 negocios de ${values.audience} com o problema ${lower(values.pain)}.`,
    `Dia 3: enviar 10 mensagens usando a oferta de ${serviceLabel}.`,
    `Dia 4: fazer follow-up em quem visualizou ou respondeu com duvida.`,
    `Dia 5: fechar uma conversa de diagnostico e oferecer a primeira entrega.`,
  ];
}

function wireCopyButtons() {
  copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const targetId = button.dataset.copyTarget;
      const target = document.getElementById(targetId);
      const text = elementText(target);

      try {
        await copyText(text);
        showCopiedState(button);
      } catch (error) {
        button.textContent = "Sem permissao";
        window.setTimeout(() => {
          button.textContent = "Copiar";
        }, 1200);
      }
    });
  });
}

function elementText(element) {
  if (element.tagName === "UL" || element.tagName === "OL") {
    return Array.from(element.querySelectorAll("li"))
      .map((item, index) => {
        if (element.tagName === "OL") {
          return `${index + 1}. ${item.textContent}`;
        }

        return `- ${item.textContent}`;
      })
      .join("\n");
  }

  return element.textContent.trim();
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const helper = document.createElement("textarea");
  helper.value = text;
  helper.setAttribute("readonly", "");
  helper.style.position = "absolute";
  helper.style.left = "-9999px";
  document.body.appendChild(helper);
  helper.select();
  const copied = document.execCommand("copy");
  document.body.removeChild(helper);

  if (!copied) {
    throw new Error("copy-failed");
  }
}

function showCopiedState(button) {
  button.textContent = "Copiado";
  button.classList.add("copied");
  window.setTimeout(() => {
    button.textContent = "Copiar";
    button.classList.remove("copied");
  }, 1200);
}

function normalizeText(value) {
  return String(value || "").trim();
}

function normalizeWhatsapp(value) {
  return String(value || "").replace(/\D/g, "").trim();
}

function lower(text) {
  const clean = normalizeText(text);
  return clean ? clean.charAt(0).toLowerCase() + clean.slice(1) : "";
}

function pronoun(audience) {
  const clean = normalizeText(audience);
  return clean ? `o perfil de ${clean}` : "o seu negocio";
}

function persistForm(values) {
  localStorage.setItem("fonterenda-form", JSON.stringify(values));
}

function hydrateForm() {
  const raw = localStorage.getItem("fonterenda-form");
  if (!raw) {
    renderOffer({
      ...defaultState,
      brand: "Seu negocio",
      service: "uma entrega simples",
      audience: "negocios locais",
      pain: "falta de clareza na oferta",
      goal: "vender mais",
    });
    return;
  }

  try {
    const values = { ...defaultState, ...JSON.parse(raw) };
    Object.entries(values).forEach(([key, value]) => {
      const field = form.elements.namedItem(key);
      if (field) {
        field.value = value;
      }
    });
    renderOffer(values);
  } catch (error) {
    renderOffer({
      ...defaultState,
      brand: "Seu negocio",
      service: "uma entrega simples",
      audience: "negocios locais",
      pain: "falta de clareza na oferta",
      goal: "vender mais",
    });
  }
}
