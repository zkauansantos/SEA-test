import { z } from "zod";
import cpfValidator from "../../../utils/cpfValidator";
import { rgValidator } from "../../../utils/rgValidator";

export const zodFormSchema = z
  .object({
    isActive: z.boolean().optional(),
    name: z.string().nonempty({ message: "O nome é obrigatório" }),
    cpf: z
      .string()
      .nonempty({ message: "O CPF é obrigatório" })
      .refine((value) => cpfValidator(value), "CPF inválido"),
    rg: z
      .string()
      .nonempty({ message: "O RG é obrigatório" })
      .refine((value) => rgValidator(value), "RG inválido"),
    genre: z.string().nonempty({ message: "O gênero é obrigatório" }),
    dateOfBirth: z.date(),
    empPosition: z.string().nonempty({ message: "O cargo é obrigatório" }),
    usesEPI: z.boolean().optional(),
    medicalCertificateFile: z.instanceof(FileList).optional(),
    EPIS: z
      .array(
        z.object({
          activity: z.string().optional(),
          EPI: z.string().optional(),
          numberCA: z.string().optional(),
        })
      )
      .optional(),
  })
  .superRefine(({ usesEPI, EPIS }, ctx) => {
    // SE USUÁRIO NÃO MARCAR O CHECKBOX QUE NÃO USA ENTÃO É OBRIGATÓRIO
    if (usesEPI) {
      EPIS!.forEach((EPI, index) => {
        if (!EPI.EPI) {
          ctx.addIssue({
            message: "O EPI é obrigatório",
            code: z.ZodIssueCode.custom,
            path: [`EPIS[${index}].EPI`],
          });
        }

        if (!EPI.activity) {
          ctx.addIssue({
            message: "A atividade é obrigatória",
            code: z.ZodIssueCode.custom,
            path: [`EPIS[${index}].activity`],
          });
        }

        if (!EPI.numberCA) {
          ctx.addIssue({
            message: "O número CA é obrigatório",
            code: z.ZodIssueCode.custom,
            path: [`EPIS[${index}].numberCA`],
          });
        }
      });
    }
  });

export type FormData = z.infer<typeof zodFormSchema>;
