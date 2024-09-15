import ListRepo from "@/components/own/list-repo";
import { Typography } from "@/components/own/typography";
import { WorkExperience } from "@/components/own/work-experience";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full md:w-[50vw] gap-12">
      <div className="flex flex-col w-full gap-6">
        <Typography variant="h2" size="md" className="tracking-wide">
          Full Stack Developer yang lagi belajar ngoding.
        </Typography>
        <Typography variant="p" size="sm" className="leading-relaxed tracking-wide">
          &quot;Tidak ada waktu untuk mencari tahu apakah ini hal yang tepat untuk dilakukan! Teruslah bergerak - jangan mencoba
          menjaga tanganmu bersih. Memang benar, dunia ini begitu kejam.&quot; - Ujar Eren Yeager
        </Typography>
      </div>
      <div className="flex flex-col w-full gap-6">
        <Typography variant="h2" size="md" className="tracking-wide">
          Pengalaman Kerja
        </Typography>
        <Typography variant="p" size="sm" className="leading-relaxed tracking-wide">
          Betul kata pepatah, pengalaman adalah guru terbaik. Berikut ini adalah tempat yang pernah saya lewati dan telah
          membentuk saya menjadi Ferry seperti sekarang.
        </Typography>
        <WorkExperience />
      </div>
      <div className="flex flex-col w-full gap-6">
        <Typography variant="h2" size="md" className="tracking-wide">
          Kontribusi Terbaru
        </Typography>
        <ListRepo limit={9} />
      </div>
    </div>
  );
}
