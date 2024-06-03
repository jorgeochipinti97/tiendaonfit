import gsap from "gsap";
import React, { useRef } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { PaymentForm } from "./PaymentForm";
import { AddressForm } from "./AddressForm";
import { Button } from "../ui/button";


export const CheckoutForm = () => {
  const addressFormRef = useRef(null);
  const paymentFormRef = useRef(null);
  const dialogFormRef = useRef(null);

  const handleNext = () => {
    const isMobile = window.innerWidth <= 768; // Define un umbral para dispositivos móviles

    gsap.to(dialogFormRef.current, {
      height: isMobile ? "50vh" : "50vh",
      duration: 0.5,
      delay: 0.5,
    });
    gsap.to(addressFormRef.current, {
      opacity: 0,
      display: "none",
      duration: 0.5,
      onComplete: () => {
        gsap.to(paymentFormRef.current, {
          opacity: 1,
          display: "block",
          duration: 0.5,
        });
      },
    });
  };
  return (
    <div className="mt-5">
      <Dialog className="">
        <DialogTrigger asChild>
          <Button className=" font-geist mx-1  tracking-tighter">
            Comprar ahora
          </Button>
        </DialogTrigger>
        <DialogContent className="" ref={dialogFormRef}>
          <DialogHeader>
            <DialogTitle>Formulario de envío</DialogTitle>
            <DialogDescription>
              <div className="address" ref={addressFormRef}>
                <AddressForm handleNext={handleNext} />
              </div>
              <div
                className="payment"
                style={{ display: "none", opacity: 0 }}
                ref={paymentFormRef}
              >
                <PaymentForm />
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
