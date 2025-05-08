import emailjs from "@emailjs/browser";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function sendEmail(params: Record<string, string | any>, templateId: string) {
  const result = null;
  await emailjs
    .send(
      "service_a7b44yl",
      templateId,
      {
        ...params,
      },
      "r9oLUPKSxZyTe75XQ"
    )
    .then(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (result: any) => {
        console.log("sent email", result);
        return result;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (error: any) => {
        console.log("faile", error);
        return {
          status: 400,
          text: "Failed to send email",
        };
      }
    );
  return result;
}
