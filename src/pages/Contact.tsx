import { Clock, MapPin } from "lucide-react"
import { WhatsAppButton } from "../components/shared/WhatsAppButton";
import { FaWhatsapp } from 'react-icons/fa';
import heroBackground from "../assets/capa.png";

export const Contact = () => {
    return (
        <section 
        id="contact"
        className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#0A0A0A] py-16 lg:py-24">
            <img
                src={heroBackground}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#0A0A0A] via-[#0A0A0A]/50 to-[#0A0A0A]/70" />
            <div className="absolute inset-0 bg-[#0A0A0A]/40" />

            <div className="relative z-10 text-center">
                <h2 className="text-white mb-4">Título da página</h2>
            </div>
            <div className="relative z-10 w-full max-w-360 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A] rounded-lg py-8">
                <h3 className="mb-6 text-white">Fale com a Oficina</h3>

                <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-amber-primary/10 flex items-center justify-center text-amber-primary shrink-0">
                        <MapPin size={20} />
                    </div>

                    <div>
                        <h4 className="text-white mb-1">Endereço</h4>
                        <p className="text-[#A0A0A0]">Rua nome da Rua, 1234 - São Paulo</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-amber-primary/10 flex items-center justify-center text-amber-primary shrink-0">
                        <Clock size={20} />
                    </div>

                    <div>
                        <h4 className="text-white mb-1">Horário</h4>
                        <p className="text-[#A0A0A0]">Segunda a sexta, das 09h às 18h</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-amber-primary/10 flex items-center justify-center text-amber-primary shrink-0">
                        <FaWhatsapp size={20} />
                    </div>

                    <div>
                        <h4 className="text-white mb-1">WhatsApp</h4>
                        <p className="text-[#A0A0A0]">(11) 90000-0000</p>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-[rgba(212,175,55,0.1)]">
                    <WhatsAppButton className="w-full">
                        <div className="flex items-center justify-center gap-2">
                            <FaWhatsapp size={18} />
                            Tire suas dúvidas pelo WhatsApp
                        </div>
                    </WhatsAppButton>
                </div>
            </div>
        </section >
    );
};
