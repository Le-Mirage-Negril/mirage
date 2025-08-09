import { RoomData } from "@/types";
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

function getCurrentSeasonRates(room: RoomData) {
  if (!room || !room.currentSeason || !room.seasonal_rates?.length) {
    return null;
  }
  const currentSeason = room.currentSeason as "summer" | "winter";
  const currentSeasonRate = room.seasonal_rates.find((rate) =>
    rate?.season_name?.toLowerCase().includes(currentSeason?.toLocaleLowerCase())
  );
  return currentSeasonRate || null;
}

export { getCurrentSeasonRates };
