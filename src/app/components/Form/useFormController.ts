import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useEffect, useState } from "react";

const schema = z
  .object({
    isActive: z.boolean().optional(),
    name: z.string().nonempty({ message: "O nome é obrigatório" }),
    cpf: z.string().nonempty({ message: "O CPF é obrigatório" }),
    rg: z.string().nonempty({ message: "O RG é obrigatório" }),
    genre: z.string().nonempty({ message: "O Gênero é obrigatório" }),
    dateOfBirth: z.date(),
    empPosition: z.string().nonempty({ message: "O cargo é obrigatório" }),
    usesEPI: z.boolean().optional(),
    activity: z.string().optional(),
    EPI: z.string().optional(),
    numberCA: z.string().optional(),
  })
  .superRefine(({ usesEPI }, ctx) => {
    // SE USUÁRIO NÃO MARCAR O CHECKBOX QUE NÃO USA ENTÃO É OBRIGATÓRIO
    if (usesEPI) {
      ctx.addIssue({
        message: "O EPI é obrigatório",
        code: z.ZodIssueCode.custom,
        path: ["EPI"],
      });
      ctx.addIssue({
        message: "A atividade é obrigatória",
        code: z.ZodIssueCode.custom,
        path: ["activity"],
      });
      ctx.addIssue({
        message: "O número CA é obrigatório",
        code: z.ZodIssueCode.custom,
        path: ["numberCA"],
      });
    }
  });

type FormData = z.infer<typeof schema>;

export default function useFormController() {
  const [notUsesEPIchecked, setNotUsesEPIchecked] = useState(false);
  const [namePhotoSelected, setNamePhotoSelected] = useState("");

  const {
    control,
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (notUsesEPIchecked) {
      clearErrors(["EPI", "activity", "numberCA"]);
    }
  }, [notUsesEPIchecked, clearErrors]);

  console.log({ errors });

  function onSelectPhoto(photo: File | undefined) {
    if (photo) {
      if (["image/jpeg", "image/png", "image/jpg"].includes(photo.type)) {
        setNamePhotoSelected(photo.name);
        return;
      }
    }

    setNamePhotoSelected("");
  }

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    console.log(data);
  });

  return {
    notUsesEPIchecked,
    namePhotoSelected,
    control,
    errors,
    setNotUsesEPIchecked,
    onSelectPhoto,
    handleSubmit,
    register,
  };
}
