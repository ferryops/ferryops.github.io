import { Timeline } from "@/components/own/timeline";

export default function Tentang() {
  return (
    <div className="flex flex-col items-center w-full md:w-[50vw] gap-12">
      <Timeline data={dataTimeline} />
    </div>
  );
}

const dataTimeline = [
  {
    title: "2025",
    content: "Lead Developer di Minergo Systems",
  },
  {
    title: "2024",
    content: "Fulltime di Minergo Systems dan freelance",
  },
  {
    title: "2023",
    content:
      "Mulai tertarik dengan dunia programming dan masih aktif mengikuti kegiatan di luar kampus, salah satunya magang di Media Kreasi Abadi, diakhir tahun saya mendapatkan kesempatan untuk bekerja secara fulltime di Minergo Systems dan di tahun ini juga saya lulus dari Universitas Mulia program studi Teknologi Informasi dengan predikat cumlaude.",
  },
  {
    title: "2022",
    content:
      "Mulai aktif mengikuti kegiatan diluar kampus, magang di Telkom Regional VI Kalimantan dan Kominfo",
  },
  {
    title: "2021",
    content:
      "Tidak jauh berbeda dengan tahun sebelumnya, saya masih bergelut dengan kegiatan kampus",
  },
  {
    title: "2020",
    content:
      "Terjadi wabah covid-19, perkuliahan dilaksanakan secara online. Belum tertarik di dunia programming, saat itu saya lebih tertarik dengan Jaringan Komputer.",
  },
  {
    title: "2019",
    content:
      "Lulus dari SMA Negeri 1 Karau Kuala dan melanjutkan kuliah di Universitas Mulia",
  },
];
