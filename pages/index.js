import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Input from "../components/Input/index";
import Button from "../components/Button/index";
import Main from "../components/Main";

import { LoginFooter, LoginHeader} from "./Login/style";

export default function Home() {
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
