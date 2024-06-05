"use client";
import * as React from "react";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [activeImage, setActiveImage] = React.useState("/hotsale.png");

  const handleMouseEnter = (imageSrc) => {
    setActiveImage(imageSrc);
  };

  return (
    <NavigationMenu className="">
      <NavigationMenuList>
        <NavigationMenuItem>
          <img src="/logo.png" className="w-[100px] ml-5" />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="mx-5 text-md md:text-xl tracking-tighter font-geist">
              Inicio
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-md md:text-xl tracking-tighter font-geist">
            Nuestros productos
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild className="hidden md:block">
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted  no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      <img src={activeImage} className="h-[300px] rounded-xl" />
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="/products?categoria=indumentaria"
                title="Indumentaria"
                onMouseEnter={() =>
                  handleMouseEnter(
                    "https://d2hh41w9oz00ab.cloudfront.net/TIENDA+ONFIT/Buzos/Galaxy/11zon_converted/OnFit5334_2_11zon.webp"
                  )
                }
                onMouseLeave={() => handleMouseEnter("/hotsale.png")}
              >
                Encuentra la mejor indumentaria deportiva para todas tus
                actividades. Desde ropa para entrenamiento hasta atuendos
                casuales para el día a día.
              </ListItem>
              <ListItem
                href="/products?categoria=accesorios"
                title="Accesorios"
                onMouseEnter={() =>
                  handleMouseEnter(
                    "https://d2hh41w9oz00ab.cloudfront.net/TIENDA+ONFIT/guantes/OnFitII1671.jpg"
                  )
                }
                onMouseLeave={() => handleMouseEnter("/hotsale.png")}
              >
                Descubre una amplia gama de accesorios para complementar tu
                estilo de vida fitness. Desde guantes y bandas hasta botellas y
                mochilas.
              </ListItem>
              <ListItem
                href="/products?categoria=equipamiento"
                title="Equipamiento"
                onMouseEnter={() =>
                  handleMouseEnter(
                    "https://d2hh41w9oz00ab.cloudfront.net/TIENDA+ONFIT/BICICLETA+INDOOR+NORDIKA+2.0+(1).webp"
                  )
                }
                onMouseLeave={() => handleMouseEnter("/hotsale.png")}
              >
                Encuentra el equipamiento necesario para tu gimnasio en casa o
                para mejorar tus entrenamientos. Pesas, cintas de correr y más.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
