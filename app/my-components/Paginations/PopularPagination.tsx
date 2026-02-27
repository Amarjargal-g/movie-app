import { getPopularMovies } from "@/lib/api";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

type PopularProps = {
  searchParams: Promise<{ page: string | undefined }>;
};
export default async function Popular({ searchParams }: PopularProps) {
  const { page } = await searchParams;

  const { total_pages } = await getPopularMovies(page);

  const pages = Array(total_pages)
    .fill(0)
    .map((_, index) => index + 1);

  return (
    <div>
      <Pagination>
        <PaginationContent>
          {pages.slice(0, 10).map((pageNum) => {
            if (pageNum < Number(page) - 3) return null;
            if (pageNum > Number(page) + 3) return null;
            return (
              <PaginationItem key={pageNum}>
                <PaginationLink
                  href={`?page=${pageNum}`}
                  isActive={pageNum === Number(page)}
                >
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            );
          })}
          <PaginationEllipsis />
        </PaginationContent>
      </Pagination>
    </div>
  );
}
