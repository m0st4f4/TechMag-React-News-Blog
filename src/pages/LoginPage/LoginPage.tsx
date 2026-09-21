import { type ReactNode } from "react";

import { Link, Navigate, useLocation, useNavigate } from "react-router";

import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import type z from "zod";

import { LoginSchema } from "@/schema/login-schema.ts";

import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage.tsx";
import { Button } from "@/components/ui/button.tsx";

import { LoginForm } from "@/forms/LoginForm/LoginForm.tsx";

import { useAuth } from "@/hooks/useAuth.ts";
import { useLoginUser } from "@/hooks/useLoginUser.ts";

type Values = z.infer<typeof LoginSchema>;
type LocationState = {
  from?: { pathname: string };
};

export const LoginPage = (): ReactNode => {
  const { isAuthenticated } = useAuth();
  const { mutateAsync, isPending, isSuccess, data, isError, error } =
    useLoginUser();

  const navigate = useNavigate();
  const location = useLocation();
  const fromLocation =
    (location.state as LocationState)?.from?.pathname || "profile";

  const form = useForm<Values>({
    defaultValues: { username: "", password: "" },
    resolver: zodResolver(LoginSchema),
  });

  const handleFormSubmit: SubmitHandler<Values> = async (data: Values) => {
    await mutateAsync(data);
    navigate(fromLocation, { replace: true });
  };

  if (isAuthenticated) {
    return <Navigate to="/profile" />;
  }
  return (
    <>
      {isError && <ErrorMessage error={error} className="mt-4" />}
      {isSuccess ? (
        <div className="text-center flex flex-col items-center">
          <p className="p-2 w-full rounded-lg">
            <strong>{data?.user.username}</strong> , Your account has been
            created. Log in to your account from the link below
          </p>
        </div>
      ) : (
        <LoginForm
          noValidate
          onSubmit={form.handleSubmit(handleFormSubmit)}
          form={form}
          isPending={isPending}
        />
      )}
      <div className="w-fit flex flex-col">
        <Button variant="link" asChild>
          <Link to="/login">Login to your account</Link>
        </Button>
        <Button variant="link" asChild>
          <Link to="/rest-pass">Reset your password</Link>
        </Button>
      </div>
    </>
  );
};
