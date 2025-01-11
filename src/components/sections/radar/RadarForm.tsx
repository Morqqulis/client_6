'use client'

import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useRadarStore } from '@/stores/useRadarStore'
import { useForm } from 'react-hook-form'

const RadarForm = () => {
  const { percentage, selectedGender, setPercentage, setSelectedGender } = useRadarStore()
  const form = useForm({
    defaultValues: {
      percentage,
      gender: selectedGender,
    },
  })
  const submitForm = async (data) => {
    console.log(data)
    setPercentage(data.percentage)
    setSelectedGender(data.gender)
    //  useRadarStore.setState({ percentage: data.percentage, selectedGender: data.gender })
  }

  return (
    <Form {...form}>
      <form className={`flex flex-col gap-5`} onSubmit={form.handleSubmit(submitForm)}>
        <FormField
          control={form.control}
          name={'percentage'}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Percentage</FormLabel>
              <FormControl>
                <Input type={'number'} {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={'gender'}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogClose asChild>
          <Button type="submit">Set</Button>
        </DialogClose>
      </form>
    </Form>
  )
}

export default RadarForm
