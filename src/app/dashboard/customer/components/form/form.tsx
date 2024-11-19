"use client"
import {useForm} from "react-hook-form"
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/input"

const schema = z.object({
    name: z.string().min(1, "O campo nome é obrigatório"),
    email: z.string().email("Digite um email valido.").min(1, "O email é obrigatório."),
    phone: z.string().refine((value) => {
      return /^(?:\(\d{2}\)\s?)?\d{9}$/.test(value) || /^\d{2}\s\d{9}$/.test(value) || /^\d{11}$/.test(value)
    }, {
      message: "O numero de telefone deve estar (DD) 999999999"
    }),
    address: z.string(),
  })
  
  type FormData = z.infer<typeof schema>

export function NewCustomerForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema)
      })

      function handleRegisterCustomer(data: FormData) {
        console.log(data);
        

      }

    return (
        <form className="flex flex-col mt-6" onSubmit={handleSubmit(handleRegisterCustomer)}>
            <label className="mb-1 text-lg font-medium">Nome Completo</label>
            <Input 
                type="text"
                name="name"
                placeholder="Digite o nome completo"
                error={errors.name?.message}
                register={register}
            />

            <section className="flex gap-2 mt-2 my-2 flex-col sm:flex-row">
                <div className="flex-1">
                <label className="mb-1 text-lg font-medium">Telefone</label>
                <Input 
                    type="string"
                    name="phone"
                    placeholder="Exemplo: (DD) 98999-9999"
                    error={errors.phone?.message}
                    register={register}
                />
                </div>
           
                <div className="flex-1">
                <label className="mb-1 text-lg font-medium">E-mail</label>
                <Input 
                    type="email"
                    name="email"
                    placeholder="Digite o e-mail"
                    error={errors.email?.message}
                    register={register}
                />
                </div>
            </section>
            <label className="mb-1 text-lg font-medium">Endereço Completo</label>
            <Input 
                type="text"
                name="address"
                placeholder="Digite o endereço do cliente"
                error={errors.address?.message}
                register={register}
            />

            <div className="flex justify-center mt-3">
             <button className="w-64  bg-blue-500 my-4 px-2 h-11 rounded text-white font-bold text-center antialiased">Cadastrar</button>
            </div>

        </form>
    )
}