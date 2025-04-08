import emailjs from "@emailjs/browser";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function sendEmail(params: Record<string, string | any>, templateId: string) {
  let result = false;
  emailjs
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
        if (result.status === 200) {
          result = true;
        } else if (result.status !== 200) {
          result = false;
        }
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (error: any) => {
        console.log("faile", error);
        result = false;
      }
    );
  return result;
}
