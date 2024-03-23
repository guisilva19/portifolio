"use client";
import { Avatar, Button } from "@nextui-org/react";
import DropdownMobile from "../dropdown/dropdown";
import Link from "next/link";
import { itemsListNav } from "@/data/itemsListNav";
import { ItemNav } from "@/interfaces";

export default function Header() {
  return (
    <>
      <header className="w-screen h-16 bg-primary-black border-b border-white/20 ">
        <div className="w-full h-full flex items-center justify-between px-5 md:px-10 xl:px-16 2xl:px-0 2xl:w-[1280px] mx-auto">
          <div className="flex gap-3 items-center">
            <Avatar
              name="GS"
              classNames={{
                base: "bg-gradient-to-r from-primary-purple via-primary-pink to-primary-orange",
                name: "text-white font-semibold text-lg",
              }}
            />
            <h1 className="text-white font-bold">Gui Silva</h1>
          </div>
          <nav className="flex lg:hidden">
            <DropdownMobile />
          </nav>
          <nav className="hidden lg:flex w-7/12 justify-between">
            <ul className="flex">
              {itemsListNav.map((item: ItemNav, index: number) => (
                <ItemNav name={item.name} path={item.path} key={index} />
              ))}
            </ul>
            <Button className="" variant="faded">
              CV
            </Button>
          </nav>
        </div>
      </header>
    </>
  );
}

const ItemNav = ({ path, name }: ItemNav) => {
  return (
    <>
      <li>
        <Link href={path} className="text-white">
          {name}
        </Link>
      </li>
    </>
  );
};
