import Link from "next/link";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "20px" }}>
            {currentPage > 1 && (
                <Link href={`/blog?page=${currentPage - 1}`}>
                    Anterior
                </Link>
            )}
            <span>
                Página {currentPage} de {totalPages}
            </span>
            {currentPage < totalPages && (
                <Link href={`/blog?page=${currentPage + 1}`}>
                    Próxima
                </Link>
            )}
        </div>
    );
};

export default Pagination;
