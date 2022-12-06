import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";

import Main from "../../components/Main";

import { CardSelect, Content, ContentForm, ContentFormSM, DivCards, NovaPlantaHeader, NovaPlantaText, SubmitDiv } from "../../styles/NovaPlanta";
import Input from "../../components/Input";
import Button from "../../components/Button";

type Inputs = {
  nome: string,
  sobrenome: string,
  email: string,
  senha: string,
};

export default function Step5(props) {
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
          <h2>Sua nova <span>planta</span></h2>
        </NovaPlantaHeader>
          <ContentFormSM onSubmit={handleSubmit(onSubmit)}>
            <Content>
                <Image src="/planta_etapa_final.png" alt="Planta Cadastrada" width={220} height={240} />
                <h2>1° Passo</h2>
                <p>Corte a garrafa PET</p>
                <SubmitDiv>
                <Button
                    backgroundColor="#F3F3F3"
                    width="min-content"
                    color="#217B51"
                    padding="20px 45px"
                    fontSize="18px"
                >
                    Voltar
                </Button>
                <Button
                    backgroundColor="#217B51"
                    width="min-content"
                    color="#FFF"
                    padding="20px 40px"
                    fontSize="18px"
                >
                    Finalizar
                </Button>
                </SubmitDiv>
            </Content>
          </ContentFormSM>
    </Main>
  );
}
  