import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { FormData, zodFormSchema } from "./schema/zodFormSchema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usersService } from "../../services/users";
import { useSelector } from "../../hooks/useSelector";
import { useDispatch } from "react-redux";
import { hideForm, setCompletedStage } from "../../redux/dashboard/actions";

export default function useFormController() {
  const [notUsesEPIchecked, setNotUsesEPIchecked] = useState(false);
  const [namePhotoSelected, setNamePhotoSelected] = useState("");
  const formIsVisible = useSelector((state) => state.dashboard.formVisible);
  const dispatch = useDispatch();

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

  console.log(errors);

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    const {
      cpf,
      dateOfBirth,
      empPosition,
      genre,
      name,
      rg,
      EPIS,
      medicalCertificateFile,
      isActive,
      usesEPI,
    } = data;

    try {
      await mutateAsync({
        name,
        cpf,
        EPIS,
        dateOfBirth,
        empPosition,
        genre,
        isActive,
        medicalCertificateFile: medicalCertificateFile?.name || null,
        rg,
        usesEPI,
      });

      dispatch(setCompletedStage(true));
      dispatch(hideForm());

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
    formIsVisible,
    fields,
    dispatch,
    setNotUsesEPIchecked,
    onSelectPhoto,
    handleSubmit,
    register,
    append,
    remove,
  };
}
