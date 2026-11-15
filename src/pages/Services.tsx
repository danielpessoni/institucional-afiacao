import { Slider } from "../components/Slider"
import heroBackground from "../assets/capa.png"
import { Carousel } from "../components/Carousel"
import { WhatsAppButton } from "../components/shared/WhatsAppButton"

export const Services = () => {
    const generalServices = [
        {
            title: "Serviço T1 - #01",
            description: "Descrição do Serviço T - #01.",
            price: "R$ XX"
        },
        {
            title: "Serviço T1 - 02",
            description: "Descrição do Serviço T -  #02.",
            price: "R$ XX"
        },
        {
            title: "Serviço T1 - #03",
            description: "Descrição do Serviço T -  #03.",
            price: "R$ XX"
        }
    ]

    const premiumServices = [
        {
            title: "Serviço T2 - #01",
            description: "Descrição do Serviço T2 - #02.",
            price: "R$ XX"
        },
        {
            title: "Serviço T2 - #02",
            description: "Descrição do Serviço T2 - #02.",
            price: "R$ XX"
        },
        {
            title: "Serviço T2 - #03",
            description: "Descrição do Serviço T2 - #03.",
            price: "R$ XX"
        }
    ]

    return (
        <section
            id="services"
            className="relative h-screen w-full flex flex-col justify-start overflow-y-auto bg-[#0A0A0A] px-3 pt-20 pb-24 md:justify-center md:overflow-hidden"
        >
            <img
                src={heroBackground}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#0A0A0A] via-[#0A0A0A]/50 to-[#0A0A0A]/70" />
            <div className="absolute inset-0 bg-[#0A0A0A]/40" />

            <div className="relative z-10 max-w-360 mx-auto w-full px-2 sm:px-4 lg:px-8 mb-1 md:mb-20">
                <div className="text-center">
                    <h2 className="text-white text-xl sm:text-2xl mb-1 md:mb-8">Título para Serviços T1</h2>
                </div>

                <div className="hidden md:grid grid-cols-3 gap-3 sm:gap-4">
                    {generalServices.map((service, index) => (
                        <Slider
                            key={index}
                            title={service.title}
                            description={service.description}
                            price={service.price}
                            className="h-[18dvh]"
                        />
                    ))}
                </div>
                <div className="md:hidden">
                    <Carousel loop={true}>
                        {generalServices.map((service, index) => (
                            <Slider
                                key={index}
                                title={service.title}
                                description={service.description}
                                price={service.price}
                                className="h-[18dvh]"
                            />
                        ))}
                    </Carousel>
                </div>
            </div>


            <div className="relative z-10 max-w-360 mx-auto w-full px-2 sm:px-4 lg:px-8">
                <div className="text-center">
                    <h2 className="text-white text-xl sm:text-2xl mb-1 md:mb-5">Título para Serviços T2</h2>
                </div>

                <div className="hidden md:grid grid-cols-3 gap-3 sm:gap-4">
                    {premiumServices.map((service, index) => (
                        <Slider
                            key={index}
                            title={service.title}
                            description={service.description}
                            price={service.price}
                            className="h-[18dvh]"
                        />
                    ))}
                </div>
                <div className="md:hidden">
                    <Carousel loop={true}>
                        {premiumServices.map((service, index) => (
                            <Slider
                                key={index}
                                title={service.title}
                                description={service.description}
                                price={service.price}
                                className="h-[18dvh]"
                            />
                        ))}
                    </Carousel>
                </div>


                <div className="relative z-10 flex justify-center pt-1 md:pt-3">
                    <WhatsAppButton>
                        Tire suas dúvidas pelo WhatsApp
                    </WhatsAppButton>
                </div>

            </div>
        </section>
    )
}