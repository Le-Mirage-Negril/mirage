import React from "react";
import CredentialSignIn from "./CredentialsSignIn";
// import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

async function page() {
  const session = null;
  console.log(session);
  if (session) {
    redirect("/admin");
  }
  return (
    <div className="mx-auto bg-cyan-950 w-screen">
      <section className="container relative h-screen flex items-center overflow-hidden justify-center">
        <Card className="w-96">
          <CardHeader>
            <CardTitle className="text=center">Sign In</CardTitle>
          </CardHeader>

          <CardContent>
            <CredentialSignIn />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

export default page;
