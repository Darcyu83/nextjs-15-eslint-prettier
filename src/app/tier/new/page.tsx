'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  regTierSchema,
  TRegTierFormInput,
} from './_components/form/validation';
import RegTierForm from './_components/form';
import TierDnd from './_components/dnd';
import { Button } from '@/components/ui/button';

interface IProps {}

function TierCreatePage(props: IProps) {
  const { toast } = useToast();

  const form = useForm<TRegTierFormInput>({
    resolver: zodResolver(regTierSchema),
    defaultValues: {
      title: '',
      category: 'Game',
      desc: '',
    },
  });

  const onSubmit: SubmitHandler<TRegTierFormInput> = (inputValues) => {
    console.log(inputValues);
    toast({
      variant: 'destructive',
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
      <Card>
        <CardHeader>
          <CardTitle>Create a Template</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>

        <CardContent>
          <RegTierForm form={form} onSubmit={onSubmit} />

          <TierDnd />

          <Button form='reg_tier_form' type='submit'>
            Submit
          </Button>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default TierCreatePage;
