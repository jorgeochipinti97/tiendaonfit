import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import useGlobalForm from "@/hooks/useGlobalForm";



export const AddressForm = ({ handleNext }) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const { updateShippingDetails } = useGlobalForm();


  const onSubmit = (data) => {
    // Actualiza los detalles de envío en el estado global
    updateShippingDetails({
      firstName: data.name,
      lastName: data.lastName,
      email: data.email,
      address: data.address,
      addressNumber: data.numberAddress,
      postalCode: data.zipCode,
      localidad: data.locality,
      city: data.city,
      provincia: data.provincia,
      mobile: data.phone,
      idNumber:data.idNumber
    });

    handleNext(); 

  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Nombre"
          {...register("name", { required: true })}
          className="my-1"
        />
        <Input
          placeholder="Apellido"
          className="my-1"
          {...register("lastName", { required: true })}
        />
          <Input
            placeholder="DNI"
            className="my-1"
            {...register("idNumber", { required: true })}
          />
        <Input
          placeholder="Email"
          className="my-1"
          {...register("email", { required: true })}
        />
        <Input
          placeholder="Dirección"
          className="my-1"
          {...register("address", { required: true })}
        />
        <Input
          placeholder="Número"
          className="my-1"
          {...register("numberAddress", { required: true })}
        />
        <Input
          placeholder="Código postal"
          className="my-1"
          {...register("zipCode", { required: true })}
        />
        <Input
          placeholder="Localidad"
          className="my-1"
          {...register("locality", { required: true })}
        />
        <Input
          placeholder="Ciudad"
          className="my-1"
          {...register("city", { required: true })}
        />
        <Input
          placeholder="Provincia"
          className="my-1"
          {...register("provincia", { required: true })}
        />
        <Input
          placeholder="Celular"
          className="my-1"
          {...register("phone", { required: true })}
        />
        <div className="mt-5">
          <Button type="submit">Enviar</Button>
        </div>
      </form>
    </div>
  );
};
