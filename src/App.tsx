import React from 'react';
import { Heart, ExternalLink, Package } from 'lucide-react';

interface ProdutoItem {
  nome: string;
  descricao: string;
  preco: string;
  url: string;
  imagem: string;
}

function App() {
  const produtos: ProdutoItem[] = [
    {
      nome: "Bola Elétrica Interativa",
      descricao: "Bola que pisca e rola sozinha para entreter seu pet",
      preco: "R$36,90",
      url: "https://amzn.to/3QPhfnx",
      imagem: "https://m.media-amazon.com/images/I/4110y+cNozL._AC_SX679_.jpg"
    },
    {
      nome: "Brinquedo de Pelúcia para Cachorro",
      descricao: "Patinho de pelúcia fofinho com textura especial",
      preco: "R$44,99",
      url: "https://amzn.to/4iHAL1z",
      imagem: "https://m.media-amazon.com/images/I/61G4uboHcTL._AC_SL1500_.jpg"
    },
    {
      nome: "Cama Confortável para Pets",
      descricao: "Macia e aconchegante para seu pet",
      preco: "R$ 49,90",
      url: "https://amzn.to/43sYkGO",
      imagem: "https://m.media-amazon.com/images/I/61qHy1oiF-L.__AC_SX300_SY300_QL70_ML2_.jpg"
    },
    {
      nome: "Chalesco Brinquedo Macaco",
      descricao: "Macaco com brinquedos para seu pet",
      preco: "R$26,45",
      url: "https://amzn.to/43rcsQT",
      imagem: "https://m.media-amazon.com/images/I/61PKYONBoaL.__AC_SX300_SY300_QL70_ML2_.jpg"
    },
    {
      nome: "Bola Trançada com Guizo para Pets",
      descricao: "Super absorvente com controle de odores",
      preco: "R$ R$34,90",
      url: "https://amzn.to/43naSiT",
      imagem: "https://m.media-amazon.com/images/I/61ynWY9rYsL.__AC_SX300_SY300_QL70_ML2_.jpg"
    },
  
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-purple-600 p-4">
      <div className="max-w-lg mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-full p-4 mb-6 inline-block">
            <Heart className="w-12 h-12 text-white mx-auto" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Amigos para Sempre</h1>
          <p className="text-white/90 text-lg">Produtos especiais para seu pet</p>
        </div>

        <div className="space-y-4">
          {produtos.map((produto, index) => (
            <a
              key={index}
              href={produto.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="flex items-center p-4">
                <div className="w-20 h-20 flex-shrink-0">
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 min-w-0 pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="mb-1 sm:mb-0 flex-shrink min-w-0 pr-4">
                      <h2 className="text-base font-semibold text-gray-800 truncate">{produto.nome}</h2>
                      <p className="text-sm text-gray-500 truncate">{produto.descricao}</p>
                    </div>
                    <div className="flex items-center justify-between sm:flex-col sm:items-end">
                      <span className="text-base font-bold text-pink-600 whitespace-nowrap">{produto.preco}</span>
                      <span className="inline-flex items-center text-sm text-purple-600 font-medium ml-4 sm:ml-0 sm:mt-1">
                        Ver na Amazon <ExternalLink className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <footer className="mt-8 text-center">
          <p className="text-white/80 text-sm">
            © {new Date().getFullYear()} Amigos para Sempre
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;