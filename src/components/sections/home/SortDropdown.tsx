import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useFileStore, SortOption } from '@/stores/useFileStore'
import { ArrowUpDown } from 'lucide-react'

export function SortDropdown() {
  const { sortOption, setSortOption } = useFileStore()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="default"
          className="flex gap-2 items-center border border-muted hover:border-custom-red"
        >
          Sort by <ArrowUpDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Sort by</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={sortOption} onValueChange={(value) => setSortOption(value as SortOption)}>
          <DropdownMenuRadioItem value="default">Default</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="popularity-asc">Popularity (Low to High)</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="popularity-desc">Popularity (High to Low)</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="release-date-asc">Release Date (Oldest First)</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="release-date-desc">Release Date (Newest First)</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="track-name-asc">Track Name (A-Z)</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="track-name-desc">Track Name (Z-A)</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="artist-asc">Artist (A-Z)</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="artist-desc">Artist (Z-A)</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="duration-asc">Duration (Shortest First)</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="duration-desc">Duration (Longest First)</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

