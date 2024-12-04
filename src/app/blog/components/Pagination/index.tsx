import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const generatePageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <nav aria-label="Navegação de páginas" style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "20px" }}>
      {currentPage > 1 && (
        <Link href={`/blog?page=${currentPage - 1}`} aria-label={`Página anterior`}>
          Anterior
        </Link>
      )}

      {generatePageNumbers().map((page) => (
        <Link
          key={page}
          href={`/blog?page=${page}`}
          aria-label={`Ir para a página ${page}`}
          style={{
            textDecoration: "none",
            padding: "5px 10px",
            border: "1px solid #ccc",
            backgroundColor: page === currentPage ? "#0070f3" : "transparent",
            color: page === currentPage ? "#fff" : "#000",
            borderRadius: "4px",
          }}
        >
          {page}
        </Link>
      ))}

      {currentPage < totalPages && (
        <Link href={`/blog?page=${currentPage + 1}`} aria-label={`Próxima página`}>
          Próxima
        </Link>
      )}
    </nav>
  );
};

export default Pagination;
