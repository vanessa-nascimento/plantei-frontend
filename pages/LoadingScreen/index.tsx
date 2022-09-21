import Image from "../../node_modules/next/image";
import Main from "../../components/Main";
import taioba1 from '../../assets/icons/icone_taioba1.svg'
import taioba2 from '../../assets/icons/icone_taioba2.svg'

import { ContainerLoading, PrincipalImage, StartImage, EndImage } from "./style";


export default function LoadingScreen() {
  return (
    <Main backgroundColor="#FFE490" padding="0">
      <ContainerLoading>
        <StartImage>
          <Image src={taioba1} alt="Ícone plantei" layout="fixed" />
        </StartImage>
        <PrincipalImage>
          <Image src="/icone_plantei2.svg" alt="Ícone plantei" width={300} height={259} layout="fill" z-index="1" />
        </PrincipalImage>
        <EndImage>
          <Image src={taioba2} alt="Ícone plantei" layout="fixed" />
        </EndImage>
      </ContainerLoading>
    </Main>
    );
  }
  

