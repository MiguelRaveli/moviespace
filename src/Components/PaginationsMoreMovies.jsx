import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const Paginations = ({
  previousSlice,
  nextSlice,
  setPreviousSlice,
  setNextSlice,
}) => {
  const nextpage = () => {
    // Verifica se a próxima página excederia o limite de itens
    if (nextSlice >= 18) {
      return;
    }

    // Atualiza os slices para avançar para a próxima página
    setPreviousSlice(nextSlice);
    setNextSlice(nextSlice + 6);
  };

  const previouspage = () => {
    // Verifica se já está na primeira página
    if (previousSlice <= 0) {
      return;
    }

    // Atualiza os slices para voltar para a página anterior
    setPreviousSlice(previousSlice - 6);
    setNextSlice(previousSlice);
  };
  return (
    <>
      <div className="bg-[#202020] text-white flex gap-5 justify-center items-center p-5">
        <button onClick={previouspage}>
          <IoIosArrowBack />
        </button>
        <p className="text-[#FF9800]">
          {previousSlice} - {nextSlice}
        </p>
        <button onClick={nextpage}>
          <IoIosArrowForward />
        </button>
      </div>
    </>
  );
};

export default Paginations;
