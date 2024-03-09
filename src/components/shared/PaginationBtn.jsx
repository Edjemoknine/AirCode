import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  
  // eslint-disable-next-line react/prop-types
  export function PaginationDemo({page}) {
    

    return (
      <Pagination className="mt-6">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious  href={`?page=${page>1 ?page-1:1}`} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="?page=1">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="?page=2" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="?page=3">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext  href={`?page=${page+1}`}/>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  }
  