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
  const [namePhotoSelected, setNamePhotoSelected] = useState<
    string | undefined
  >("");
  const formIsVisible = useSelector((state) => state.dashboard.formVisible);
  const dispatch = useDispatch();

  const {
    control,
    formState: { errors },
    handleSubmit: hookFormHandleSubmit,
    register,
    resetField,
    clearErrors,
    reset,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(zodFormSchema),
    defaultValues: {
      EPIS: [{ activity: "", EPI: "", numberCA: "" }],
    },
  });

  const medicalCertificateFileName = watch("medicalCertificateFile");

  const { fields, append, remove } = useFieldArray({
    control,
    name: "EPIS",
  });

  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(usersService.create);

  useEffect(() => {
    if (notUsesEPIchecked) {
      clearErrors(["EPIS"]);

      resetField("EPIS");
    }
  }, [notUsesEPIchecked, clearErrors, resetField]);

  useEffect(() => {
    if (medicalCertificateFileName && medicalCertificateFileName!.length > 0) {
      setNamePhotoSelected(medicalCertificateFileName?.[0].name);
    }
  }, [medicalCertificateFileName]);

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
        EPIS: EPIS?.filter((epi) => epi.EPI && epi.activity && epi.numberCA),
        dateOfBirth,
        empPosition,
        genre,
        isActive,
        medicalCertificateFile: medicalCertificateFile?.[0]?.name || null,
        rg,
        usesEPI,
      });

      dispatch(setCompletedStage(true));
      dispatch(hideForm());
      setNotUsesEPIchecked(false);
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
    handleSubmit,
    register,
    append,
    remove,
  };
}
