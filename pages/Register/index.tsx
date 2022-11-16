import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";

import Input from "../../components/Input/index";
import Button from "../../components/Button/index";
import Main from "../../components/Main";

import { RegisterFooter, RegisterHeader, SubmitDiv } from "./style";

type Inputs = {
  nome: string,
  sobrenome: string,
  email: string,
  senha: string,
};

export default function Register(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  
  console.log(watch("email"), errors)
  
  return (
    <Main backgroundColor="#FFF" padding="0">
      <Main backgroundColor="#FFF" padding="1">
        <RegisterHeader>
          <h1>Junte-se a nós!</h1>
          <h2>Estamos ansiosos com a sua chegada</h2>
        </RegisterHeader>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("nome", { required: true })}
            placeholder="Nome"
            border="1px solid #EDCA5C"
            width={100}
            margin="20px 0"
          />
          <Input
            {...register("sobrenome", { required: true })}
            placeholder="Sobrenome"
            border="1px solid #EDCA5C"
            width={100}
            margin="20px 0"
          />
          <Input
            {...register("email", { required: true })}
            placeholder="Email"
            border="1px solid #EDCA5C"
            width={100}
            margin="20px 0"
          />
          
          <Input
            {...register("senha", { required: true })}
            placeholder="Senha"
            border="1px solid #EDCA5C"
            width={100}
            margin="0 0 30px 0"
          />
          
          <SubmitDiv>
            <Button
              backgroundColor="#EDCA5C"
              width="min-content"
              color="#7B7878"
              padding="10px 35px"
            >
              Cadastrar
            </Button>
          </SubmitDiv>
        </form>
      </Main>
      <RegisterFooter>
        <Image src="/icone_taioba2.svg" alt="Ícone plantei" width={160} height={331} layout="fixed" />
      </RegisterFooter>
    </Main>
    );
  }
  