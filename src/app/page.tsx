

/* Importação dos componentes que irão fazer parte da minha home*/
import HomePage from "./HomePage/page";
import Sobre from './Sobre/page'
import Servicos from "./Servicos/page";
import Marketing from "./SobreProduto/page";
import Produtos from "./Produtos/page";
import MarketingSegundo from "./MarketingSegundo/page";
import Reservas from "./Reserva/page";
import MarketingTerceiro from "./MarketingTerceiro/page";
import Pesquisa from "./Pesquisa/page";
import DestaquePesquisa from "./DestaquePesquisa/page";

export default function Home() {
  return (
    <div>
      <HomePage/>
      <Sobre/>
      <MarketingTerceiro/>
      <Servicos/>
      <Marketing/>
      <Produtos/>
      <MarketingSegundo/>
      <Reservas/>
      <Pesquisa/>
      <DestaquePesquisa/>
    </div>
  );
}
