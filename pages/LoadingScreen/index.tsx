import Image from "../../node_modules/next/image";
import Main from "../../components/Main";

import { ContainerLoading, PrincipalImage, StartImage, EndImage } from "./style";


export default function LoadingScreen() {
  return (
    <Main backgroundColor="#FFE490" padding="0">
      <ContainerLoading>
        <StartImage>
          <Image src="/icone_introduction2.svg" alt="Ícone plantei" width={249} height={407}/>
        </StartImage>
        <PrincipalImage>
          <Image src="/icone_plantei2.svg" alt="Ícone plantei" width={309} height={259} />
        </PrincipalImage>
        <EndImage>
          <Image src="/icone_introduction.svg" alt="Ícone plantei" width={196} height={331}/>
        </EndImage>
      </ContainerLoading>
    </Main>
    );
  }
  

