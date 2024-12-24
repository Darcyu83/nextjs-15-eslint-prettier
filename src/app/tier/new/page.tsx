'use client';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

interface IProps {}

const formSchema = z.object({
  title: z
    .string()
    .min(2, { message: 'Title must be at least 2 charaters' })
    .max(10, { message: 'Title cannot be longger than 10 charaters' }),

  category: z
    .string()
    .min(2, { message: 'category must be at least 2 charaters' })
    .max(20, { message: 'category cannot be longger than 20 charaters' }),

  desc: z
    .string()
    .min(2, { message: 'category must be at least 2 charaters' })
    .max(50, { message: 'desc cannot be longger than 50 charaters' }),
});
type TFormInput = z.infer<typeof formSchema>;

function TierCreatePage(props: IProps) {
  const form = useForm<TFormInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      category: '',
      desc: '',
    },
  });

  const { toast } = useToast();
  const onSubmit: SubmitHandler<TFormInput> = (inputValues) => {
    console.log(inputValues);

    toast({
      variant: 'destructive', // "default"
      title: 'Input Values',
      description: (
        <pre>
          <code>{JSON.stringify(inputValues, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <div>
      <h1>Create a Template</h1>

      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='border border-violet-400'
            >
              <div className='space-y-8'>
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
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
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

                <input className={buttonVariants()} type='submit' />
              </div>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default TierCreatePage;
