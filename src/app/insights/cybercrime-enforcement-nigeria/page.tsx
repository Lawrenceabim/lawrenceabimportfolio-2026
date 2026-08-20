import { GlobalBackground } from "@/components/layout/global-bg";
import { Header } from "@/components/layout/header";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/content/site";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ExternalLink,
  Mail,
} from "lucide-react";

const article = {
  title:
    "From Cybercrime Law to Enforcement: Closing Nigeria's SOP and Skills Gap",
  description:
    "Nigeria has built a substantial cybercrime legal framework. The harder challenge is translating it into reliable evidence workflows, institutional coordination, and role-specific capability.",
  path: "/insights/cybercrime-enforcement-nigeria",
  image: "/insights/cybercrime-enforcement-nigeria.jpg",
  date: "August 20, 2026",
  dateTime: "2026-08-20",
  readingTime: "8 min read",
} as const;

const articleUrl = `${siteConfig.url}${article.path}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: article.path },
  openGraph: {
    type: "article",
    url: articleUrl,
    title: article.title,
    description: article.description,
    siteName: siteConfig.name,
    publishedTime: article.dateTime,
    authors: [siteConfig.name],
    images: [
      {
        url: article.image,
        width: 1672,
        height: 941,
        alt: "Laptop beside a judicial gavel and handcuffs, representing cybercrime enforcement and digital evidence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: article.title,
    description: article.description,
    images: [article.image],
  },
};

const operationalModel = [
  {
    number: "01",
    title: "Legal authority",
    detail: "Clear offences, lawful powers, safeguards, and cooperation duties.",
  },
  {
    number: "02",
    title: "Repeatable workflow",
    detail: "Consistent intake, preservation, analysis, escalation, and handover.",
  },
  {
    number: "03",
    title: "Role-specific capability",
    detail: "Practical knowledge for the public, investigators, prosecutors, and judges.",
  },
  {
    number: "04",
    title: "Trusted outcomes",
    detail: "Stronger evidence, fairer process, better cooperation, and resilient cases.",
  },
] as const;

const sources = [
  {
    label: "Cybercrimes (Prohibition, Prevention, etc.) (Amendment) Act, 2024",
    publisher: "WIPO Lex",
    href: "https://www.wipo.int/wipolex/en/legislation/details/22699",
  },
  {
    label: "Nigeria Data Protection Act, 2023",
    publisher: "Nigeria Data Protection Commission",
    href: "https://ndpc.gov.ng/resources/",
  },
  {
    label: "Nigeria's accession to the Budapest Convention",
    publisher: "Council of Europe",
    href: "https://www.coe.int/en/web/cybercrime/-/original-instrument-confirming-nigeria-s-accession-to-the-convention-on-cybercrime-received",
  },
  {
    label: "United Nations Convention against Cybercrime: status and signatures",
    publisher: "United Nations Treaty Collection",
    href: "https://treaties.un.org/pages/ViewDetails.aspx?chapter=18&clang=_en&mtdsg_no=XVIII-16&src=TREATY",
  },
] as const;

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: article.title,
  description: article.description,
  image: `${siteConfig.url}${article.image}`,
  datePublished: article.dateTime,
  dateModified: article.dateTime,
  mainEntityOfPage: articleUrl,
  author: {
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  publisher: {
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
  },
};

const bodyCopy =
  "font-serif text-[1.08rem] leading-8 text-muted-foreground sm:text-lg sm:leading-9";
const inlineLink =
  "font-medium text-foreground underline decoration-accent/60 underline-offset-4 transition-colors hover:text-accent";

export default function CybercrimeEnforcementNigeriaInsight() {
  return (
    <div className="relative min-h-screen">
      <GlobalBackground />
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="pb-24 pt-28 sm:pt-32">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Link
              href="/#research"
              className="mb-10 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to research
            </Link>

            <header className="border-b border-border pb-10">
              <div className="mb-6 flex flex-wrap items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.15em]">
                <span className="text-accent">Research insight</span>
                <span aria-hidden="true" className="text-border">
                  /
                </span>
                <span className="text-muted-foreground">Ongoing research</span>
              </div>

              <h1 className="max-w-4xl font-sans text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {article.title}
              </h1>

              <p className="mt-7 max-w-3xl font-serif text-xl leading-8 text-muted-foreground sm:text-2xl sm:leading-9">
                {article.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                <span className="text-foreground">By Bimbo Lawrence Damitan</span>
                <span aria-hidden="true">·</span>
                <time dateTime={article.dateTime}>{article.date}</time>
                <span aria-hidden="true">·</span>
                <span>{article.readingTime}</span>
              </div>
            </header>

            <figure className="my-10 overflow-hidden border border-border bg-surface/50 p-2 sm:p-3">
              <div className="relative aspect-[16/9] overflow-hidden bg-surface">
                <Image
                  src={article.image}
                  alt="Laptop beside a judicial gavel and handcuffs, representing cybercrime enforcement and digital evidence"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 896px"
                  className="object-cover"
                />
              </div>
              <figcaption className="border-t border-border px-2 pb-1 pt-3 font-mono text-xs leading-5 text-muted-foreground sm:px-3">
                Cybercrime enforcement sits at the intersection of technology,
                criminal procedure, electronic evidence, and institutional
                capability. Original visual created for this insight.
              </figcaption>
            </figure>

            <div className="space-y-12">
              <section aria-labelledby="starting-point">
                <p className="border-l-2 border-accent pl-5 font-serif text-xl font-medium leading-8 text-foreground sm:text-2xl sm:leading-9">
                  Nigeria&apos;s central cybercrime challenge is no longer simply
                  whether a law exists. It is whether institutions can turn that
                  law into reliable, rights-respecting action from the first
                  complaint to the final courtroom decision.
                </p>

                <h2
                  id="starting-point"
                  className="mt-10 font-sans text-3xl font-semibold tracking-tight text-foreground"
                >
                  The law is the starting point, not the finished system
                </h2>
                <div className="mt-5 space-y-5">
                  <p className={bodyCopy}>
                    Nigeria has a substantial legal foundation for responding to
                    cybercrime. The Cybercrimes Act has been updated through a
                    {" "}
                    <a
                      href="https://www.wipo.int/wipolex/en/legislation/details/22699"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={inlineLink}
                    >
                      2024 amendment
                    </a>
                    , while the Nigeria Data Protection Act provides a parallel
                    framework for the responsible handling of personal data.
                    Nigeria also became a party to the Budapest Convention in
                    2022 and signed the United Nations Convention against
                    Cybercrime in October 2025.
                  </p>
                  <p className={bodyCopy}>
                    These instruments matter. They define offences, investigative
                    powers, safeguards, and channels for international
                    cooperation. Yet a statute cannot preserve a volatile log,
                    document who handled a device, coordinate two agencies, or
                    prepare an expert to explain a forensic finding in court.
                    Those outcomes depend on people following a dependable
                    process under time pressure.
                  </p>
                </div>
              </section>

              <section aria-labelledby="operational-gap">
                <h2
                  id="operational-gap"
                  className="font-sans text-3xl font-semibold tracking-tight text-foreground"
                >
                  The real bottleneck is operational consistency
                </h2>
                <div className="mt-5 space-y-5">
                  <p className={bodyCopy}>
                    Cybercrime cases are unusually sensitive to delay and
                    fragmentation. Account data may change, logs may expire,
                    funds may move across institutions, and a service provider
                    may sit outside the investigator&apos;s jurisdiction. A weak
                    handoff at any point can make later technical work less useful
                    or make otherwise relevant evidence harder to trust.
                  </p>
                  <p className={bodyCopy}>
                    This is why enforcement capacity should be understood as a
                    chain rather than a collection of isolated experts. Complaint
                    intake, legal authorization, evidence preservation, forensic
                    examination, inter-agency coordination, international
                    requests, prosecution, and judicial assessment have to work
                    as one system. Excellence in one stage cannot fully repair a
                    broken stage before it.
                  </p>
                </div>

                <div className="mt-8 border border-border bg-background/80 p-5 sm:p-7">
                  <div className="mb-6 flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-accent" aria-hidden="true" />
                    <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
                      A practical enforcement chain
                    </h3>
                  </div>
                  <ol className="grid gap-4 sm:grid-cols-2">
                    {operationalModel.map((step) => (
                      <li
                        key={step.number}
                        className="border border-border bg-surface/50 p-5"
                      >
                        <span className="font-mono text-xs font-semibold tracking-widest text-accent">
                          {step.number}
                        </span>
                        <h4 className="mt-3 font-sans text-lg font-semibold text-foreground">
                          {step.title}
                        </h4>
                        <p className="mt-2 font-serif text-base leading-7 text-muted-foreground">
                          {step.detail}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </section>

              <section aria-labelledby="two-pillars">
                <h2
                  id="two-pillars"
                  className="font-sans text-3xl font-semibold tracking-tight text-foreground"
                >
                  Two reform pillars: repeatable procedure and usable knowledge
                </h2>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <div className="border border-border bg-background/80 p-6">
                    <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      Pillar 01
                    </span>
                    <h3 className="mt-3 font-sans text-2xl font-semibold text-foreground">
                      Standard operating procedures
                    </h3>
                    <p className="mt-4 font-serif text-base leading-8 text-muted-foreground">
                      SOPs convert broad legal duties into actions that teams can
                      perform, document, supervise, and improve. At a minimum,
                      they should make intake and triage consistent, protect the
                      provenance of electronic evidence, define coordination and
                      escalation points, and make domestic and cross-border
                      requests legally complete and time-aware.
                    </p>
                  </div>

                  <div className="border border-border bg-background/80 p-6">
                    <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      Pillar 02
                    </span>
                    <h3 className="mt-3 font-sans text-2xl font-semibold text-foreground">
                      Security education, training, and awareness
                    </h3>
                    <p className="mt-4 font-serif text-base leading-8 text-muted-foreground">
                      Training should follow the case lifecycle instead of using
                      one generic curriculum. Citizens need safe reporting and
                      preservation guidance. Investigators and forensic teams
                      need scenario-based technical practice. Prosecutors and
                      judges need confidence in digital evidence, expert
                      testimony, proportionality, and the limits of technical
                      conclusions.
                    </p>
                  </div>
                </div>
              </section>

              <section aria-labelledby="cooperation">
                <h2
                  id="cooperation"
                  className="font-sans text-3xl font-semibold tracking-tight text-foreground"
                >
                  International cooperation starts with domestic readiness
                </h2>
                <div className="mt-5 space-y-5">
                  <p className={bodyCopy}>
                    The Council of Europe describes the Budapest Convention as
                    both a legal instrument and a practitioner framework for
                    cooperation. That distinction is important. A treaty can open
                    a channel, but the request travelling through it still needs
                    accurate facts, a clear legal basis, the correct authority,
                    a defined evidence scope, and prompt follow-up.
                  </p>
                  <p className={bodyCopy}>
                    Domestic readiness therefore determines how valuable
                    international membership becomes in practice. A capable
                    national workflow can identify cross-border dependencies
                    early, preserve what is available locally, and send a focused
                    request before evidence disappears. The same discipline also
                    helps Nigeria respond credibly when another jurisdiction asks
                    it for assistance.
                  </p>
                </div>
              </section>

              <section aria-labelledby="rights">
                <h2
                  id="rights"
                  className="font-sans text-3xl font-semibold tracking-tight text-foreground"
                >
                  Accountability is part of capacity
                </h2>
                <div className="mt-5 space-y-5">
                  <p className={bodyCopy}>
                    Faster enforcement should not mean weaker safeguards.
                    Searches, preservation demands, information requests, and
                    data sharing must remain lawful, necessary, proportionate,
                    and documented. Good procedure protects the public and the
                    integrity of the case at the same time.
                  </p>
                  <p className={bodyCopy}>
                    This is also where cybercrime enforcement and data protection
                    meet. The Nigeria Data Protection Act is not separate from
                    operational quality: it reinforces the need to define purpose,
                    control access, retain data responsibly, and account for how
                    personal information is handled. A trustworthy system should
                    be able to explain not only what it did, but why and under
                    whose authority.
                  </p>
                </div>
              </section>

              <section aria-labelledby="success">
                <h2
                  id="success"
                  className="font-sans text-3xl font-semibold tracking-tight text-foreground"
                >
                  What meaningful progress should look like
                </h2>
                <p className={`${bodyCopy} mt-5`}>
                  Reform should be judged by operational outcomes, not only by
                  the number of workshops delivered or policies issued. Useful
                  indicators include:
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "shorter, documented response times for preservation and escalation;",
                    "fewer breaks in chain-of-custody and evidence records;",
                    "clearer ownership when multiple agencies or providers are involved;",
                    "higher-quality domestic and international evidence requests;",
                    "more confident, comprehensible presentation of technical evidence in court; and",
                    "visible safeguards for privacy, due process, and accountable use of investigative powers.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-4 font-serif text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
                    >
                      <ArrowRight
                        className="mt-1 h-4 w-4 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className={`${bodyCopy} mt-7`}>
                  Nigeria&apos;s legal architecture creates a serious foundation.
                  The next step is to make lawful good practice routine across
                  institutions and across the complete life of a case. That is
                  how legislation becomes enforcement capacity—and how
                  enforcement earns public trust.
                </p>
              </section>

              <aside
                aria-labelledby="research-note"
                className="border-l-4 border-accent bg-accent/10 p-6 sm:p-8"
              >
                <h2
                  id="research-note"
                  className="font-mono text-sm font-semibold uppercase tracking-[0.14em] text-foreground"
                >
                  Research note
                </h2>
                <p className="mt-4 font-serif text-base leading-7 text-muted-foreground">
                  This article is a public-facing reflection drawn from my
                  ongoing independent research. It does not reproduce the full
                  paper, its detailed reform framework, or its complete legal and
                  comparative analysis. The full academic work is intended for
                  later publication. This article is not legal advice.
                </p>
              </aside>

              <section aria-labelledby="selected-sources">
                <h2
                  id="selected-sources"
                  className="font-sans text-2xl font-semibold tracking-tight text-foreground"
                >
                  Selected official sources
                </h2>
                <ul className="mt-5 divide-y divide-border border-y border-border">
                  {sources.map((source) => (
                    <li key={source.href}>
                      <a
                        href={source.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start justify-between gap-5 py-4 text-left"
                      >
                        <span>
                          <span className="block font-sans text-base font-medium text-foreground transition-colors group-hover:text-accent">
                            {source.label}
                          </span>
                          <span className="mt-1 block font-mono text-xs uppercase tracking-wider text-muted-foreground">
                            {source.publisher}
                          </span>
                        </span>
                        <ExternalLink
                          className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-accent"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              <footer className="flex flex-col items-start justify-between gap-6 border-t border-border pt-8 sm:flex-row sm:items-center">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    Continue the conversation
                  </p>
                  <p className="mt-2 font-serif text-base text-muted-foreground">
                    Interested in cybercrime policy, digital evidence, or
                    institutional capability?
                  </p>
                </div>
                <a
                  href="mailto:lawrenceabim@gmail.com?subject=Cybercrime%20enforcement%20research"
                  className="inline-flex items-center gap-2 border border-border bg-background/80 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Discuss this research
                </a>
              </footer>
            </div>
          </div>
        </Container>
      </article>
    </div>
  );
}
