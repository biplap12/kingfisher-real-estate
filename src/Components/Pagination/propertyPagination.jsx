import { ChevronLeft, ChevronRight } from "lucide-react";

const SimplePagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const scrollToTop = () => {
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  };

  const handlePageChange = (page) => {
    onPageChange(page);
    scrollToTop();
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-12">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
<<<<<<< HEAD
        className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
=======
        className="p-2 rounded-lg border border-gray-200 hover:bg-[#F6BC6D] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
>>>>>>> origin/dev_biplap
      >
        <ChevronLeft size={20} />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            currentPage === page
              ? "bg-gray-900 text-white"
<<<<<<< HEAD
              : "bg-white border border-gray-200 hover:bg-gray-50"
=======
              : " border border-gray-200 hover:bg-[#F6BC6D] hover:text-white"
>>>>>>> origin/dev_biplap
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
<<<<<<< HEAD
        className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
=======
        className="p-2 rounded-lg border border-gray-200 hover:bg-[#F6BC6D] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
>>>>>>> origin/dev_biplap
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default SimplePagination;
