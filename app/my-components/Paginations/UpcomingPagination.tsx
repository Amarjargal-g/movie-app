import { getUpcomingMovies } from "@/lib/api";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type UpcomingProps = {
  searchParams: Promise<{ page: string | undefined }>;
};

export default async function Upcoming({ searchParams }: UpcomingProps) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;

  const { total_pages } = await getUpcomingMovies(page);

  const pageNumbers = [];
  for (
    let i = Math.max(1, currentPage - 1);
    i <= Math.min(total_pages, currentPage + 1);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <div className="w-full mt-12 mb-8">
      <div className="flex justify-end px-4">
        <Pagination className="w-auto mx-0 bg-transparent">
          <PaginationContent className="gap-6">
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  href={`?page=${currentPage - 1}`}
                  className="bg-transparent border-none text-gray-500 hover:text-white transition-colors"
                />
              </PaginationItem>
            )}

            {pageNumbers.map((pageNum) => (
              <PaginationItem key={pageNum}>
                <PaginationLink
                  href={`?page=${pageNum}`}
                  isActive={pageNum === currentPage}
                  className={`bg-transparent border-none shadow-none text-base transition-all ${
                    pageNum === currentPage
                      ? "text-white font-bold scale-110"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            ))}

            {currentPage < total_pages - 1 && (
              <PaginationItem>
                <PaginationEllipsis className="text-gray-700 border-none" />
              </PaginationItem>
            )}

            {currentPage < total_pages && (
              <PaginationItem>
                <PaginationNext
                  href={`?page=${currentPage + 1}`}
                  className="bg-transparent border-none text-gray-500 hover:text-white transition-colors"
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
