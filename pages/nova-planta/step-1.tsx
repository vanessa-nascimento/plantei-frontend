import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";

import Main from "../../components/Main";

import { CardSelect, Content, ContentForm, ContentFormSM, DivCard, DivCards, NovaPlantaHeader, NovaPlantaText, SubmitDiv } from "../../styles/NovaPlanta";
import Input from "../../components/Input";
import Button from "../../components/Button";

type Inputs = {
  nome: string,
  sobrenome: string,
  email: string,
  senha: string,
};

export default function Step1(props) {
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
          <h1>Sua nova <span>planta</span></h1>
        </NovaPlantaHeader>
          <ContentFormSM onSubmit={handleSubmit(onSubmit)}>
            <Content className="contentsm">
            <div>
              <NovaPlantaText>Você está em:</NovaPlantaText>
                <Input
                  {...register("email", { required: true })}
                  placeholder="Endereço"
                  border="1px solid #9AC979"
                  backgroundColor="#9AC979"
                  color="#FFF"
                  width={100}
                  margin="0"
                />
            </div>
            <div>
              <NovaPlantaText>Quanto espaço você tem para plantar?</NovaPlantaText>
              <DivCards>
                <CardSelect>
                  <Image src="/planta_espaco_pequeno.png" alt="Ícone plantei" width={95} height={95} />
                  <p>Pequeno</p>
                </CardSelect>
                <CardSelect>
                  <Image src="/planta_espaco_medio.png" alt="Ícone plantei" width={95} height={95} />
                  <p>Médio</p>
                </CardSelect>
                <CardSelect>
                  <Image src="/planta_espaco_grande.png" alt="Ícone plantei" width={95} height={95} />
                  <p>Grande</p>
                </CardSelect>
              </DivCards>
            </div>
            
            <SubmitDiv className="contentsm">
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
          </ContentFormSM>
    </Main>
  );
}
  