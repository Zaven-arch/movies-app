import { Grid } from '@/components/Grid'
import { Title } from '@/components/Title'
import { TextField } from '@/components/TextField'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

import { useCreatePage } from '@/hooks'

export default function CreatePage() {
  const {
    onBackHandler,
    titleAttrs,
    descriptionAttrs,
    onSubmitHandler,
    isDisabled,
  } = useCreatePage()

  return (
    <Container className="max-w-[600px]">
      <Grid className="gap-12">
        <Title text="Add Movie" withArrow action={onBackHandler} />
        <Grid className="gap-8">
          <Grid className="gap-2">
            <Title subtitle text="Title" />
            <TextField {...titleAttrs} className="px-3 [&>input]:text-base" />
          </Grid>
          <Grid className="gap-2">
            <Title subtitle text="Description" />
            <TextField
              {...descriptionAttrs}
              textArea
              className="px-3 [&>textarea]:text-base"
            />
          </Grid>
          <Button
            disabled={isDisabled}
            color="green"
            customize="!text-lg"
            action={onSubmitHandler}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}
