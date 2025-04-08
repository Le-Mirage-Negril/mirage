import emailjs from "@emailjs/browser";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function sendEmail(params: Record<string, string | any>) {
  let result = false;
  emailjs
    .send(
      "service_4ufw5zb",
      "template_iq19jfv",
      {
        ...params,
      },
      "Q3FdJozPBW62sJiSg"
    )
    .then(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (result: any) => {
        console.log("sent email", result);
        result = true;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (error: any) => {
        console.log("faile", error);
        result = false;
      }
    );
  return result;
}
