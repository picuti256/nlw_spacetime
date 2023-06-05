import Image from "next/image";

// Aqui passando o caminho onde se encontra nossa imagem
import nlwLogo from "../assets/nlw-spacetime-logo.svg";

export function Hero() {
  return (
    <div className="space-y-5 ">
      {/* No next utilizamos imagens fazendo importação como componentes */}
      <Image src={nlwLogo} alt="nlw Space Time" />
      <div className="max-w-[420px] space-y-1">
        <h1 className="text-5xl font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilha (se quiser)
          com o mundo!
        </p>
      </div>
      <a
        href="/"
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
      >
        Cadastrar lembrança
      </a>
    </div>
  );
}
