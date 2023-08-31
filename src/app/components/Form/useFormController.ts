import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const schema = z.object({
  isActive: z.boolean().optional(),
  name: z.string().nonempty({ message: "O nome é obrigatório" }),
  cpf: z.string().nonempty({ message: "O CPF é obrigatório" }),
  rg: z.string().nonempty({ message: "O RG é obrigatório" }),
  genre: z.string().nonempty({ message: "O Gênero é obrigatório" }),
  dateOfBirth: z.date(),
  empPosition: z.string().nonempty({ message: "O cargo é obrigatório" }),
  activity: z.string().nonempty({ message: "A atividade é obrigatória" }),
  usesEPI: z.boolean().optional(),
  EPI: z.string().nonempty({ message: "O EPI usada é obrigatória" }),
  numberCA: z.string().nonempty({ message: "O número do CA é obrigatório" }),
});

type FormData = z.infer<typeof schema>;

export default function useFormController() {
  const {
    control,
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    console.log(data);
  });

  return {
    handleSubmit,
    register,
    control,
    errors,
  };
}
