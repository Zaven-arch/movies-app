import Link from 'next/link'

import { Button } from '@/components/Button'
import { Grid } from '@/components/Grid'
import { Title } from '@/components/Title'
import { SearchFilter } from '@/components/SearchFilter'
import { MoviesProvider } from '@/contexts/Movies'
import { Movies } from '@/components/Movies'

export default function HomePage() {
  return (
    <MoviesProvider>
      <Grid className="gap-20 h-full grid-rows-[min-content]">
        <SearchFilter />
        <Grid className="gap-3 grid-rows-[min-content]">
          <div className="flex justify-between items-center">
            <Title text="List of movies" />
            <Link href="/create">
              <Button color="white">Add movie</Button>
            </Link>
          </div>
          <Movies />
        </Grid>
      </Grid>
    </MoviesProvider>
  )
}
