import Image from "../../node_modules/next/image";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string,
  exampleRequired: string,
};

export default function Login(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  console.log(watch("email"), errors)

  return (
    <>
      <Image src="/icone_plantei.svg" alt="Ícone plantei" width={110} height={110} />
      <h1>Que bom te ter por aqui!</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email", { required: true })} placeholder="Email" />
    
        <input {...register("senha", { required: true })} placeholder="Senha" />
        
        <button type="submit">
            Entrar
        </button>
      </form>
    </>
  );
}
