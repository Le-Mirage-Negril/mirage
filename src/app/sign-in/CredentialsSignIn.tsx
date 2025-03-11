"use client";

import React from "react";

import { signInWitCredentials } from "@/lib/actions/user.actions";
import { useActionState } from "react";
// is useFormState in react 18
import { useFormStatus } from "react-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function CredentialSignIn() {
  const [data, action] = useActionState(signInWitCredentials, {
    success: false,
    message: "",
  });
  const { pending } = useFormStatus();

  return (
    <form action={action} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" autoComplete="email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          autoComplete="current-password"
          required
        />
      </div>
      <div>
        <Button variant="default" type="submit" className="w-full" disabled={pending}>
          {pending ? "Signing In" : "Sign in"}
        </Button>
      </div>
      {data && !data.success && <div className="text-center text-destructive">{data.message}</div>}
    </form>
  );
}

export default CredentialSignIn;
