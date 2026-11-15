import heroBackground from "../assets/capa.png"
import authorized01 from "../assets/autorizado/authorized01.png"
import authorized02 from "../assets/autorizado/authorized02.png"
import { Carousel } from "../components/Carousel"
import { Button } from "../components/shared/Button"
import { WhatsAppButton } from "../components/shared/WhatsAppButton"

export const About = () => {
    const desktopTextFirst = (
        <>
            <span className="mb-4 block text-2xl font-semibold text-yellow-primary sm:text-3xl">
                Título do quadro 1
            </span>
            <span className="block">
                Texto do quadro 1 com até 180 caracteres
            </span>
        </>
    )

    const desktopTextSecond = (
        <>
            <span className="mb-4 block text-2xl font-semibold text-yellow-primary sm:text-3xl">
                Título do quadro 2
            </span>
            <span className="block">
                Texto do quadro 1 com até 180 caracteres
            </span>
        </>
    )

    const mobileText = (
        <div className="flex aspect-square h-auto w-full flex-col justify-center rounded-lg border border-yellow-primary/20 bg-[#1A1A1A]/95 px-5 text-center text-sm text-[#D1D1D1] sm:px-8 sm:text-base">
            <span className="mb-4 block text-2xl font-semibold text-yellow-primary sm:text-3xl">
                Título do card Mobile
            </span>
            <span className="block">
                Texto do quadro mobile com até 190 caracteres
            </span>
        </div>
    )

    // Classes compartilhadas pelos cards e pelas imagens das certificações.
    const cardClassName =
        "aspect-square w-full overflow-hidden rounded-lg border border-yellow-primary/20 bg-[#1A1A1A] md:aspect-[5/3]"
    const textCardClassName =
        "about-text-card flex aspect-square min-h-0 min-w-0 items-center overflow-hidden rounded-lg border border-yellow-primary/20 bg-[#1A1A1A]/95 md:aspect-[5/3]"

    return (
        <section
            id="about"
            className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-[#0A0A0A] px-3 py-24"
        >
            {/* Imagem de fundo da página. */}
            <img
                src={heroBackground}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Sobreposições escurecem a imagem para melhorar o contraste do conteúdo. */}
            <div className="absolute inset-0 bg-linear-to-r from-[#0A0A0A] via-[#0A0A0A]/50 to-[#0A0A0A]/70" />
            <div className="absolute inset-0 bg-[#0A0A0A]/40" />

            <div className="about-grid-shell relative z-10 mx-auto w-full max-w-220 px-2 sm:px-4 lg:px-8">
                <h2 className="mb-5 text-center text-xl text-white sm:text-2xl">
                    Título da seção
                </h2>

                {/* Layout desktop: grade 2x2 com textos e certificações alternados. */}
                <div className="hidden md:grid grid-cols-2 gap-4 lg:gap-6">
                    <div className={`${textCardClassName} p-5 text-sm leading-relaxed text-[#D1D1D1] lg:p-6 lg:text-base`}>
                        <div>{desktopTextFirst}</div>
                    </div>
                    <div className={cardClassName}>
                        <img
                            src={authorized01}
                            alt="Certificação #01"
                            className="h-full w-full object-contain"
                        />
                    </div>
                    <div className={cardClassName}>
                        <img
                            src={authorized02}
                            alt="Certificação #02"
                            className="h-full w-full object-contain"
                        />
                    </div>
                    <div className={`${textCardClassName} p-5 text-sm leading-relaxed text-[#D1D1D1] lg:p-6 lg:text-base`}>
                        <div>{desktopTextSecond}</div>
                    </div>
                </div>

                {/* Layout mobile: as certificações e o texto são exibidos em um carrossel. */}
                <div className="md:hidden">
                    <Carousel initialIndex={1} loop={false} slideClassName="w-[64vw]">
                        <div className={cardClassName}>
                            <img
                                src={authorized01}
                                alt="Certificação #01"
                                className="h-full w-full object-contain"
                            />
                        </div>
                        {mobileText}
                        <div className={cardClassName}>
                            <img
                                src={authorized02}
                                alt="Certificação #02"
                                className="h-full w-full object-contain"
                            />
                        </div>
                    </Carousel>
                </div>

                {/* Ação de contato disponível em todos os tamanhos de tela. */}
                <div className="relative z-10 mt-5 flex justify-center">
                    <WhatsAppButton>
                        Falar sobre meus instrumentos
                    </WhatsAppButton>
                </div>
            </div>
        </section>
    )
}