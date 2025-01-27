'use client';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { submitComment } from 'shared/services';
import { Input, Button, Form } from 'shared/components';

interface CommentsFormProps {
  slug: string;
}

interface FormValues {
  name: string;
  email: string;
  comment: string;
}

export const CommentsForm = ({ slug }: CommentsFormProps) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>();
  const {
    formState: { errors, isSubmitting },
    register,
    reset,
    handleSubmit
  } = useForm<FormValues>();

  const onSubmitComment: SubmitHandler<FormValues> = async (data) => {
    await submitComment({ ...data, slug }).then(() => {
      setShowSuccessMessage(true);
      reset();

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2000);
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitComment)}>
      <h3 className="text-xl mb-8 font-semibold border-b border-gray-300 pb-4">
        Leave a comment
      </h3>

      <div className="grid grid-cols-1 gap-4 mb-4">
        <Input
          register={register}
          errors={errors}
          classes="p-4"
          name="comment"
          placeholder="Comment"
          textarea
          required
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Input
          register={register}
          errors={errors}
          classes="py-2 px-4"
          name="name"
          placeholder="Name (optional)"
          required
        />
        <Input
          register={register}
          errors={errors}
          name="email"
          classes="py-2 px-4"
          placeholder="Email"
          required
        />
      </div>

      <div className="mt-8">
        <Button type="submit" disabled={isSubmitting || showSuccessMessage}>
          Send
        </Button>
        {showSuccessMessage && (
          <span className="text-xl float-right font-semibold mt-3 text-green-400">
            Comment submitted for review!
          </span>
        )}
      </div>
    </Form>
  );
};
