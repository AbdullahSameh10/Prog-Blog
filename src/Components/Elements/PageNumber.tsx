// i have made the code but i gave it to Deepseek to improve the performance 
// as the website became slow after what i had done 😅

import styled, { css } from "styled-components";
import { useMemo, useCallback, memo } from "react";

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  user-select: none;
`;

const sharedBoxStyles = css`
  min-width: 38px;
  height: 38px;
  padding: 0 10px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const PageButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "$active",
})<{ $active?: boolean }>`
  ${sharedBoxStyles};

  border: 1px solid ${({ $active }) => ($active ? "#4B6BFB" : "#E5E7EB")};
  background-color: ${({ $active }) =>
    $active ? "#4B6BFB" : "transparent"};
  color: ${({ $active }) => ($active ? "#fff" : "#374151")};

  cursor: pointer;
  transition: all 0.15s ease;

  &:hover:not(:disabled) {
    background-color: ${({ $active }) =>
      $active ? "#3b5bfd" : "#F1F5FF"};
    border-color: #4b6bfb;
    color: ${({ $active }) => ($active ? "#fff" : "#4B6BFB")};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(75, 107, 251, 0.35);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;

const Ellipsis = styled.span`
  ${sharedBoxStyles};
  color: #9ca3af;
  cursor: default;
`;

const MemoizedPageButton = memo(PageButton);
const MemoizedEllipsis = memo(Ellipsis);

type PageItem = number | "...";

function getPaginationRange( current: number, total: number, delta = 2): PageItem[] {

  if (total <= 1) return [1];
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const range: PageItem[] = [];
  const left = Math.max(2, current - delta);
  const right = Math.min(total - 1, current + delta);

  range.push(1);

  if (left > 2) {
    range.push("...");
  }

  for (let i = left; i <= right; i++) {
    range.push(i);
  }

  if (right < total - 1) {
    range.push("...");
  }

  if (total > 1) {
    range.push(total);
  }

  return range;
}

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function PageNumber(props: Props) {
  const { currentPage, totalPages, onPageChange } = props;

  const pages = useMemo(
    () => getPaginationRange(currentPage, totalPages),
    [currentPage, totalPages]
  );

  const handlePageChange = useCallback(
    (page: number) => {
      if (page !== currentPage && page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
    },
    [currentPage, totalPages, onPageChange]
  );

  return (
    <PaginationWrapper>
      {pages.map((item, index) =>
        item === "..." ? (
          <MemoizedEllipsis key={`ellipsis-${index}`}>…</MemoizedEllipsis>
        ) : (
          <MemoizedPageButton
            key={item}
            $active={item === currentPage}
            onClick={() => handlePageChange(item)}
          >
            {item}
          </MemoizedPageButton>
        )
      )}
    </PaginationWrapper>
  );
}