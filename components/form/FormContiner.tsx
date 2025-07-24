"use client";

import { actionFunction } from "@/utils/types";
import { useRouter } from "next/navigation";
import React, { useActionState, useEffect, useTransition } from "react";
import { toast } from "sonner";

interface FormProps {
  children: React.ReactNode;
  action: actionFunction;
}

const initialState = {
  message: "",
};

const FormContainer = ({ children, action }: FormProps) => {
  const [state, formAction] = useActionState(action, initialState);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  useEffect(() => {
    if (state.message) {
      toast("", {
        description: state.message,
      });
      startTransition(() => {
        setTimeout(() => {
          router.refresh();
        }, 200);
      });
    }
  }, [state]);
  return <form action={formAction}>{children}</form>;
};

export default FormContainer;
