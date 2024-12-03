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
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "20px" }}>
            {/* Botão "Anterior" */}
            {currentPage > 1 && (
                <Link
                    href={`/blog?page=${currentPage - 1}`}
                    style={{ textDecoration: "none", padding: "5px 10px", border: "1px solid #ccc" }}
                >
                    Anterior
                </Link>
            )}

            {/* Números da paginação */}
            {generatePageNumbers().map((page) => (
                <Link
                    key={page}
                    href={`/blog?page=${page}`}
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

            {/* Botão "Próxima" */}
            {currentPage < totalPages && (
                <Link
                    href={`/blog?page=${currentPage + 1}`}
                    style={{ textDecoration: "none", padding: "5px 10px", border: "1px solid #ccc" }}
                >
                    Próxima
                </Link>
            )}
        </div>
    );
};

export default Pagination;
