import { useState } from "react";
import { motorbikesDb } from "../../data/motorbikesDb";
import styles from "./FilteredMotorbikes.module.css";
import MotorbikeResults from "../MotorbikeResults/MotorbikeResults";
import Pagination from "../Pagination/Pagination";

export default function FilteredMotorbikes({ answers }) {
  const { license, style, budget, brand, weight } = answers;

  const validBrands = [
    "yamaha",
    "honda",
    "kawasaki",
    "suzuki",
    "ducati",
    "bmw",
  ];

  const budgetRanges = {
    3000: { min: 1000, max: 3000 }, 
    6000: { min: 3000, max: 6000 },
    10000: { min: 6000, max: 10000 },
  };

  const weightRanges = {
    medium: { min: 170, max: 210 },
    big: { min: 210, max: 500 },
  };

  const filteredMotorbikes = motorbikesDb.filter((motorbike) => {
    return (
      (style ? motorbike.style.toLowerCase() === style.toLowerCase() : true) &&
      (brand === "other"
        ? !validBrands.includes(motorbike.brand.toLowerCase())
        : motorbike.brand.toLowerCase() === brand.toLowerCase()) &&
      (license
        ? motorbike.license.toLowerCase() === license.toLowerCase() ||
          (motorbike.license.toLowerCase() === "a/a2" &&
            (license === "a" || license === "a2"))
        : true) &&
      (budget === "other"
        ? true
        : budgetRanges[budget]
        ? parseInt(motorbike.budget, 10) >= budgetRanges[budget].min &&
          parseInt(motorbike.budget, 10) <= budgetRanges[budget].max
        : true) &&
      (weight === "other"
        ? true
        : weightRanges[weight]
        ? parseInt(motorbike.weight, 10) >= weightRanges[weight].min &&
          parseInt(motorbike.weight, 10) <= weightRanges[weight].max
        : true)
    );
  });

  const noMotos = filteredMotorbikes.length === 0;

  // Establecemos el estado para la página actual
  const [currentPage, setCurrentPage] = useState(1);

  // Funciones para cambiar de página
  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredMotorbikes.length / resultsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Paginación: establecer el número de resultados por página
  const resultsPerPage = 5;

  // Calculamos los índices de inicio y fin para los resultados de la página actual
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;

  // Slice de los resultados para mostrar solo los de la página actual
  const motorbikesToShow = filteredMotorbikes.slice(startIndex, endIndex);

  if (noMotos) {
    return (
      <div className={styles.scrollContainer}>
        <div className={styles.noResults}>
          No hay motos que tengan esas características. Disculpe las molestias.
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={styles.scrollContainer}>
        {/* Mostramos las motos filtradas según la página actual */}
        <MotorbikeResults motorbikes={motorbikesToShow} />
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredMotorbikes.length / resultsPerPage)}
          onNext={handleNextPage}
          onPrevious={handlePreviousPage}
        />
        {/* Paginación */}
      </div>
    </>
  );
}
