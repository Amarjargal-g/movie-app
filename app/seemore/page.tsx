type SearchPageProps = {
  searchParams: { query: string };
};

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.query ?? "";
}
