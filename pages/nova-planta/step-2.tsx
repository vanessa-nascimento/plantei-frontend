import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";

import Main from "../../components/Main";

import { CardSelect, Content, ContentForm, DivCards, NovaPlantaHeader, NovaPlantaText, SubmitDiv } from "../../styles/NovaPlanta";
import Input from "../../components/Input";
import Button from "../../components/Button";

type Inputs = {
  nome: string,
  sobrenome: string,
  email: string,
  senha: string,
};

export default function Step2(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  
  console.log(watch("email"), errors)
  
  return (
    <Main backgroundColor="#FFFFFF" padding="2">
        <NovaPlantaHeader>
            <Image src="/icone_folha_plantei.svg" alt="Ícone plantei" width={95} height={95} />
          <h1>Sua nova <span>planta</span></h1>
        </NovaPlantaHeader>
          <ContentForm onSubmit={handleSubmit(onSubmit)}>
            <Content>
            <div>
              <NovaPlantaText>Selecione onde ela irá ser plantada:</NovaPlantaText>
              <DivCards>
                <CardSelect>
                  <Image src="/planta_vaso_plastico.png" alt="Ícone plantei" width={95} height={95} />
                  <p>Vaso de plástico</p>
                </CardSelect>
                <CardSelect>
                  <Image src="/planta_vaso_garrafa.png" alt="Ícone plantei" width={95} height={95} />
                  <p>Garrafa pet</p>
                </CardSelect>
                <CardSelect>
                  <Image src="/planta_vaso_ceramica.png" alt="Ícone plantei" width={95} height={95} />
                  <p>Vaso de cerâmica</p>
                </CardSelect>
              </DivCards>
            </div>
            
            <SubmitDiv>
              <Button
                backgroundColor="#217B51"
                width="min-content"
                color="#FFF"
                padding="15px 100px"
                fontSize="18px"
              >
                Continuar
              </Button>
            </SubmitDiv>
            </Content>
          </ContentForm>
    </Main>
  );
}
  