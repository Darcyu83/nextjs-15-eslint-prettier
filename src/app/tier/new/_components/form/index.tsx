'use client';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { categoryKey, TRegTierFormInput } from './validation';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';

interface IProps {
  form: UseFormReturn<TRegTierFormInput>;
  onSubmit: SubmitHandler<TRegTierFormInput>;
}

function RegTierForm({ form, onSubmit }: IProps) {
  return (
    <Form {...form}>
      <form
        id='reg_tier_form'
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8'
      >
        {/* Title */}
        <FormField
          control={form.control}
          name='title'
          render={({ field, fieldState, formState }) => {
            return (
              <FormItem>
                <FormLabel>Template Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  This is the title shown on the Tier List
                </FormDescription>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        {/* Category */}
        <FormField
          control={form.control}
          name='category'
          render={({ field, fieldState, formState }) => {
            return (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select a verified email to display' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categoryKey.map((optionStr) => {
                      return (
                        <SelectItem key={optionStr} value={optionStr}>
                          {optionStr}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
                <FormDescription>Category</FormDescription>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        {/* Description */}
        <FormField
          control={form.control}
          name='desc'
          render={({ field, fieldState, formState }) => {
            return (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Textarea
                    rows={4}
                    className='resize-none'
                    placeholder='Type your message here.'
                    {...field}
                  />
                </FormControl>
                <FormDescription>Category</FormDescription>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        {/* <input className={buttonVariants()} type='submit' /> */}
      </form>
    </Form>
  );
}

export default RegTierForm;
