import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { FormData, zodFormSchema } from "./schema/zodFormSchema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usersService } from "../../services/users";

export default function useFormController() {
  const [notUsesEPIchecked, setNotUsesEPIchecked] = useState(false);
  const [namePhotoSelected, setNamePhotoSelected] = useState("");

  const {
    control,
    formState: { errors },
    handleSubmit: hookFormHandleSubmit,
    register,
    clearErrors,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(zodFormSchema),
    defaultValues: {
      EPIS: [{ activity: "", EPI: "", numberCA: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "EPIS",
  });

  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(usersService.create);

  useEffect(() => {
    if (notUsesEPIchecked) {
      clearErrors(["EPIS"]);
    }
  }, [notUsesEPIchecked, clearErrors, reset]);

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
    const {
      cpf,
      dateOfBirth,
      empPosition,
      genre,
      name,
      rg,
      EPIS,
      isActive,
      usesEPI,
    } = data;

    console.log({ EPIS });

    try {
      await mutateAsync({
        name,
        cpf,
        EPIS,
        dateOfBirth,
        empPosition,
        genre,
        isActive,
        rg,
        usesEPI,
      });

      queryClient.invalidateQueries(["users"]);
      reset();
    } catch {
      reset();
    }
  });

  return {
    notUsesEPIchecked,
    namePhotoSelected,
    control,
    errors,
    fields,
    setNotUsesEPIchecked,
    onSelectPhoto,
    handleSubmit,
    register,
    append,
    remove,
  };
}
