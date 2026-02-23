import { getPopularMovies } from "@/lib/api";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

type PopularProps = {
  searchParams: { page?: string };
};
export default async function Popular({ searchParams }: PopularProps) {
  const currentPage = Number(searchParams.page) || 1;
  const { total_pages } = await getPopularMovies(currentPage.toString());
  const pages = Array.from({ length: total_pages }, (_, i) => i + 1);

  return (
    <div>
      <Pagination>
        <PaginationContent>
          {pages.map((pageNum) => {
            if (pageNum < currentPage - 3) return null;
            if (pageNum > currentPage + 3) return null;
            return (
              <PaginationItem key={pageNum}>
                <PaginationLink
                  href={`?page=${pageNum}`}
                  isActive={pageNum === currentPage}
                >
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            );
          })}
        </PaginationContent>
      </Pagination>
    </div>
  );
}
