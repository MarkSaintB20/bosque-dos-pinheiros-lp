import { FormEvent, useState } from "react";

/*
 * Direção visual: reprodução autoral do PSD [BOSQUEDOSPINHEIROS]LP-1.psd.
 * A arte consolidada permanece como fonte visual autoritativa; esta camada
 * HTML fornece acessibilidade, navegação e comportamento aos pontos de CTA.
 */

const artwork = "https://bosque-dos-pinheiros-lp.pages.dev/bosque-dos-pinheiros-lp.png";
const whatsappNumber = "5512996268245";
const webhookUrl = "https://webhook-eggs.ackhub.app/webhook/036515a2-8ea0-47df-95d7-51ad52a1ddcb-bosque-dos-pinheiros-lp";

type LeadFormProps = {
  className: string;
  buttonLabel: string;
  location: "top" | "bottom";
};

function LeadForm({ className, buttonLabel, location }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitted) return;

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const leadPayload = {
      name,
      email,
      phone,
      project: "Bosque dos Pinheiros",
      formLocation: location,
      submittedAt: new Date().toISOString(),
      pageUrl: window.location.href,
    };
    const message = [
      "Olá! Quero saber mais sobre o Bosque dos Pinheiros.",
      `Nome: ${name}`,
      `E-mail: ${email}`,
      `Telefone: ${phone}`,
    ].join("\n");

    setSubmitted(true);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    const isCorsConfigured = window.location.origin === "https://bosque-dos-pinheiros-lp.pages.dev";
    try {
      await fetch(webhookUrl, {
        method: "POST",
        mode: isCorsConfigured ? "cors" : "no-cors",
        headers: isCorsConfigured ? { "Content-Type": "application/json" } : { "Content-Type": "text/plain;charset=UTF-8" },
        body: JSON.stringify(leadPayload),
        keepalive: true,
      });
    } catch {
      // O redirecionamento ao WhatsApp segue disponível mesmo se o endpoint estiver indisponível.
    }

    window.location.assign(whatsappUrl);
  }

  return (
    <form className={className} onSubmit={handleSubmit} aria-label={`Formulário de contato ${location}`}>
      <label className="sr-only" htmlFor={`${location}-name`}>Nome</label>
      <input id={`${location}-name`} name="name" type="text" autoComplete="name" required aria-label="Nome" />
      <label className="sr-only" htmlFor={`${location}-email`}>E-mail</label>
      <input id={`${location}-email`} name="email" type="email" autoComplete="email" required aria-label="E-mail" />
      <label className="sr-only" htmlFor={`${location}-phone`}>Telefone</label>
      <input id={`${location}-phone`} name="phone" type="tel" autoComplete="tel" required aria-label="Telefone" />
      <button type="submit" aria-label={submitted ? "Mensagem preparada" : buttonLabel}>
        <span className="sr-only">{submitted ? "Mensagem preparada" : buttonLabel}</span>
      </button>
      {submitted && <p className="form-status" role="status">Enviando seus dados e abrindo o atendimento no WhatsApp.</p>}
    </form>
  );
}

function ImageHotspot({ className, label, href = "#contato" }: { className: string; label: string; href?: string }) {
  return <a className={className} href={href} aria-label={label} />;
}

export default function Home() {
  return (
    <main className="lp-page">
      <div className="sr-only">
        <h1>Bosque dos Pinheiros: onde a vida moderna encontra mais espaço para respirar</h1>
        <p>Uma nova forma de viver chegou em Guaratinguetá. Um bairro planejado para natureza, mobilidade e qualidade de vida.</p>
        <section aria-labelledby="respirar-heading">
          <h2 id="respirar-heading">Respirar também é viver melhor</h2>
          <p>Vivemos cada vez mais cercados por pressa, trânsito e compromissos. No Bosque dos Pinheiros, a natureza está presente no cotidiano.</p>
        </section>
        <section aria-labelledby="pilares-heading">
          <h2 id="pilares-heading">Pilares do Bosque dos Pinheiros</h2>
          <p>Natureza presente, mais tempo para quem importa, bem-estar em movimento e um bairro pensado para o futuro.</p>
        </section>
        <section aria-labelledby="localizacao-heading">
          <h2 id="localizacao-heading">Perto de tudo o que faz parte da sua rotina</h2>
          <p>A localização aproxima você do Distrito Industrial de Guaratinguetá, do centro e da Basílica de Aparecida.</p>
        </section>
        <section aria-labelledby="capitulo-heading">
          <h2 id="capitulo-heading">Um novo capítulo em Guaratinguetá</h2>
          <p>O Bosque dos Pinheiros nasce em uma região com forte potencial de desenvolvimento e valorização.</p>
        </section>
        <section aria-labelledby="bairro-heading">
          <h2 id="bairro-heading">Um bairro pensado para evoluir com você</h2>
          <p>Áreas comerciais, avenida principal larga e arborizada, espaços planejados para lazer, esporte, bem-estar e convivência.</p>
        </section>
      </div>

      <div className="lp-stage" id="topo">
        <img
          className="lp-artwork"
          src={artwork}
          alt="Landing page do Bosque dos Pinheiros com famílias em contato com a natureza, informações do loteamento e formulários de contato."
          width={1400}
          height={6235}
          fetchPriority="high"
        />

        <LeadForm className="lead-form lead-form--top" buttonLabel="Antecipe-se e saiba mais" location="top" />
        <LeadForm className="lead-form lead-form--bottom" buttonLabel="Antecipe-se e saiba mais" location="bottom" />

        <ImageHotspot className="hotspot hotspot--top-cta" label="Antecipe-se e saiba mais" />
        <ImageHotspot className="hotspot hotspot--bottom-cta" label="Antecipe-se e saiba mais" />
        <ImageHotspot className="hotspot hotspot--footer-whatsapp" label="Falar pelo WhatsApp" href={`https://wa.me/${whatsappNumber}`} />
        <ImageHotspot className="hotspot hotspot--footer-instagram" label="Acessar Instagram do Bosque dos Pinheiros" href="https://www.instagram.com/bosquedospinheirosoficial/" />
      </div>
    </main>
  );
}
