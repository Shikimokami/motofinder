// components/Pagination.js
import styles from './Pagination.module.css';
import {ChevronLeft, ChevronRight} from 'lucide-react'

export default function Pagination({ currentPage, totalPages, onNext, onPrevious }) {
  return (
    <div className={styles.pagination}>
      <button
        className={styles.pageButton}
        onClick={onPrevious}
        disabled={currentPage === 1}
      >
        <ChevronLeft size={16} strokeWidth={2.5} />
      </button>
      <span>
         {currentPage} of {totalPages}
      </span>
      <button
        className={styles.pageButton}
        onClick={onNext}
        disabled={currentPage === totalPages}
      >
        <ChevronRight  size={16} strokeWidth={2.5}/>
      </button>
    </div>
  );
}
