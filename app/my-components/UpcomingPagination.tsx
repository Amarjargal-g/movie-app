import { getUpcomingMovies } from "@/lib/api";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

type UpcomingProps = {
  searchParams: Promise<{ page: string | undefined }>;
};
export default async function Upcoming({ searchParams }: UpcomingProps) {
  const { page } = await searchParams;

  const { total_pages } = await getUpcomingMovies(page);
  const pages = Array(total_pages)
    .fill(0)
    .map((_, index) => index + 1);

  return (
    <div>
      <Pagination>
        <PaginationContent>
          {pages.slice(0, 10).map((pageNum, index) => {
            if (Number(pageNum) + 3 < Number(page)) return null;
            if (Number(pageNum) - 3 > Number(page)) return null;

            return (
              <PaginationItem key={index}>
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
