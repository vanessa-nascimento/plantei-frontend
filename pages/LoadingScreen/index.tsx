import Image from "../../node_modules/next/image";
import Main from "../../components/Main";

import { LoginHeader } from "./style";


export default function LoadingScreen() {
  return (
    <Main backgroundColor="#FFE490">
      <LoginHeader>
        <Image src="/icone_plantei2.svg" alt="Ícone plantei" width={309} height={259} />
      </LoginHeader>
      <Image src="/icone_introduction2.svg" alt="Ícone plantei" width={249} height={407}/>
      <Image src="/icone_introduction.svg" alt="Ícone plantei" width={196} height={331}/>
    </Main>
    );
  }
  
