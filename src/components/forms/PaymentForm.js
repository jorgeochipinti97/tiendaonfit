import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { useToast } from "../ui/use-toast";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useGlobalForm from "@/hooks/useGlobalForm";
import useDiscount from "@/hooks/useDiscount";

export const PaymentForm = ({total}) => {

  const { submitGlobalForm } = useGlobalForm();
  const [isCreditCard, setIsCreditCard] = useState();
  const { toast } = useToast();
  const [selectedCard, setSelectedCard] = useState({
    name: "Visa Crédito",
    value: 1,
  });
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const tarjetas = [
    { name: "Visa Crédito", value: 1 },
    { name: "Visa Débito", value: 31 },
    { name: "MasterCard Débito", value: 105 },
    { name: "MasterCard Crédito", value: 104 },
    { name: "Maestro Débito", value: 106 },
    { name: "Cabal Débito", value: 108 },
    { name: "Cabal Crédito", value: 63 },
  ];
  const [isSubmit, setIsSubmit] = useState(false);
  useEffect(() => {
    if (!isCreditCard) {
      setValue("installments", "1");
    }
  }, [isCreditCard, setValue]);

  const handleSelectChange = (value) => {
    const selected = tarjetas.find(
      (tarjeta) => tarjeta.value.toString() === value
    );
    setIsCreditCard(selected.name.includes("Crédito"));
    setSelectedCard(selected);
  };

  const handleInstallmentChage = (value) => {
    setValue("installments", value);
  };

  const onSubmit = async (data) => {
    try {
      setIsSubmit(true);
      await submitGlobalForm({
        numeroTarjeta: data.numeroTarjeta,
        mesExpiracion: data.expirationDate.split("/")[0],
        anioExpiracion: data.expirationDate.split("/")[1],
        codigoSeguridad: data.cvv,
        nombreTitular: data.nombreTitular,
        tipoIdentificacion: "dni",
        numeroIdentificacion: data.numeroIdentificacion,
        cuotas: parseInt(data.installments),
        tarjetaSeleccionada: selectedCard.value,
      },total);
      toast({
        title: "Aguarde por favor",
        description: "Se esta procesando el pago.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Ha ocurrido un error en el proceso.",
        variant: "destructive",
      });
    } finally {
      setIsSubmit(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Select onValueChange={(e) => handleSelectChange(e)} required>
          <SelectTrigger className="w-full">
            <SelectValue
              placeholder="Selecciona una tarjeta"
              value={selectedCard ? selectedCard.name : ""}
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {tarjetas.map((tarjeta) => (
                <SelectItem
                  value={tarjeta.value.toString()}
                  key={tarjeta.value}
                >
                  {tarjeta.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input
          placeholder="Númuero de la tarjeta"
          {...register("numeroTarjeta", { required: true })}
          className="my-1"
        />
        <div>
          <Input
            placeholder="MM/AA"
            className="my-1"
            {...register("expirationDate", {
              required: "La fecha es requerida",
              pattern: {
                value: /^(0[1-9]|1[0-2])\/[0-9]{2}$/, // regex para validar MM/AA
                message: "Formato inválido. Use MM/AA",
              },
            })}
          />
          {errors.expirationDate && <p>{errors.expirationDate.message}</p>}
        </div>
        <div>
          <Input
            type="password"
            placeholder="Código de seguridad (CVV)"
            {...register("cvv", {
              required: "El código de seguridad es requerido",
            })}
            className="my-1"
          />
        </div>

        {isCreditCard && (
          <div>
            <Select
              onValueChange={(value) => handleInstallmentChage(value)} // Actualiza el valor en el formulario
            >
              <SelectTrigger className="w-full">
                <SelectValue
                  placeholder="Selecciona las cuotas"
                  value={getValues ? getValues("installments") : ""}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {[
                    { cuota: 1, valor: 1 },
                    { cuota: 3, valor: 13 },
                    { cuota: 6, valor: 16 },
                    { cuota: 12, valor: 7 },
                  ].map((e) => (
                    <SelectItem value={e.valor.toString()} key={e.cuota}>
                      {e.cuota} cuotas sin interés
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* Registramos el select en React Hook Form */}
            <input
              type="text"
              {...register("installments", {
                required: "Seleccionar cuotas es requerido",
              })}
              style={{ display: "none" }} // Ocultamos el input ya que el valor se gestiona con el Select
            />
          </div>
        )}
        <div>
          <Input
            placeholder="Titular de la tarjeta"
            className="my-1"
            {...register("nombreTitular", {
              required: "La fecha es requerida",
            })}
          />
        </div>
        <div>
          <Input
            placeholder="DNI del titular"
            className="my-1"
            {...register("numeroIdentificacion", {
              required: "La fecha es requerida",
            })}
          />
        </div>

        <div className="mt-5">
          <Button type="submit" disabled={isSubmit}>
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
};
